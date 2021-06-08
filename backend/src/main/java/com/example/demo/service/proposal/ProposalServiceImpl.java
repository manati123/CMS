package com.example.demo.service.proposal;

import com.example.demo.entity.Conference;
import com.example.demo.entity.Proposal;
import com.example.demo.entity.user.Author;
import com.example.demo.entity.user.User;
import com.example.demo.repository.*;
import com.example.demo.service.mapper.proposal.ProposalMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ProposalServiceImpl implements ProposalService {
    private final ProposalRepository proposalRepository;
    private final ProposalMapper proposalMapper;

    private final AuthorRepository authorRepository;
    private final CommitteeMemberRepository committeeMemberRepository;
    private final UserRepository userRepository;
    private final ConferenceRepository conferenceRepository;


    @Override
    public ProposalDto saveProposal(ProposalDto proposalDto) {
        //What happens below is the following:
        //First we decide if the user is an author for the current conference.
        //Based on this we create him.
        //From the frontend we received the userId not the authorId so we need to translate them first.
        //Just the same before returning the new proposal we need to convert the actual authorIds back into userIds
        //that are used by the frontend.
        boolean isAuthor = authorRepository.existsByUserUserIdAndConferenceConferenceId(proposalDto.getAuthorsId().get(0),proposalDto.getConferenceId());
        User currentUser = this.userRepository.getOne(proposalDto.getAuthorsId().get(0));
        Conference currentConference = this.conferenceRepository.getOne(proposalDto.getConferenceId());
        if(!isAuthor){
            System.out.println("It's not an author");
            Author newAuthor = new Author((long) -1,currentUser,new ArrayList<>(),currentConference);
            Author createdAuthor = this.authorRepository.save(newAuthor);

            List<Author> newAuthorList = new ArrayList<>();
            newAuthorList.add(createdAuthor);
            proposalDto.setAuthorsId(newAuthorList.stream().map(Author::getAuthorId).collect(Collectors.toList()));
        } else {
            System.out.println("It's an author");

            Author authorUser = this.authorRepository.getByUserUserIdAndConferenceConferenceId(proposalDto.getAuthorsId().get(0),proposalDto.getConferenceId());
            List<Author> newAuthorList = new ArrayList<>();
            newAuthorList.add(authorUser);
            proposalDto.setAuthorsId(newAuthorList.stream().map(Author::getAuthorId).collect(Collectors.toList()));
        }
        Proposal proposal = proposalMapper.toEntity(proposalDto);
        Proposal savedProposal = this.proposalRepository.save(proposal);

        //This is a problem, it returns an entity with authorIds not userIds(the way the frontend sees the id-s)(deprecated)
        List<Author> authorListFromProposal = savedProposal.getAuthorList();
        List<Author> newAuthorListWithUserIdsForFrontend = new ArrayList<>();
        authorListFromProposal.forEach(author ->{
            Author newAuthor =new Author();
            User correspondingUser = this.userRepository.getOne(author.getAuthorId());
            newAuthor.setAuthorId(author.getUser().getUserId());
            newAuthorListWithUserIdsForFrontend.add(newAuthor);
        });

        ///This should be safe.
        savedProposal.setAuthorList(newAuthorListWithUserIdsForFrontend);
        return this.proposalMapper.toService(savedProposal);
    }

    @Override
    public void deleteProposal(Long proposalDtoId) {
        this.proposalRepository.deleteById(proposalDtoId);
    }

    @Override
    public void updateProposal(ProposalDto proposalDto) {
        Proposal proposal = proposalMapper.toEntity(proposalDto);
        proposalRepository.findByProposalId(proposal.getProposalId()).ifPresent(p -> {
            p.setName(proposal.getName());
            p.setPaper(proposal.getPaper());
            p.setKeywords(proposal.getKeywords());
            p.setTopics(proposal.getTopics());
            p.setAuthorList(proposal.getAuthorList());
        });
    }

    @Override
    public Iterable<ProposalDto> getAllProposals(String username, Long conferenceId) {
        var userOptional = userRepository.findByUsername(username);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            Long userId = user.getUserId();
            List<Proposal> proposals = new ArrayList<>();

            if (committeeMemberRepository.findByUser(user).isPresent()){
                proposals = this.proposalRepository.findAllByConferenceConferenceId(conferenceId);
            } else if (authorRepository.findByUser(user).isPresent()){
                Author author = authorRepository.findByUser(user).get();
                proposals = this.proposalRepository.findAllByConferenceConferenceId(conferenceId).stream().filter(proposal -> {
                    var count = proposal.getAuthorList().stream().filter(a -> a.getAuthorId().equals(author.getAuthorId())).count();
                    return count == 1;
                }).collect(Collectors.toList());
            }
            return proposals.stream().map(proposal -> {
                List<Author> authorListFromProposal = proposal.getAuthorList();
                List<Author> newAuthorListWithUserIdsForFrontend = new ArrayList<>();
                authorListFromProposal.forEach(author ->{
                    Author newAuthor =new Author();
                    newAuthor.setAuthorId(author.getUser().getUserId());
                    newAuthorListWithUserIdsForFrontend.add(newAuthor);
                });
                ///This should be safe.
                proposal.setAuthorList(newAuthorListWithUserIdsForFrontend);
                return proposal;
            })
                    .map(this.proposalMapper::toService)
                    .collect(Collectors.toList());
        }
        return null;
    }
}
