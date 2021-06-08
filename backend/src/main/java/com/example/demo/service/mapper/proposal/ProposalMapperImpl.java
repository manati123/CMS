package com.example.demo.service.mapper.proposal;

import com.example.demo.entity.Conference;
import com.example.demo.entity.Proposal;
import com.example.demo.entity.user.Author;
import com.example.demo.entity.user.User;
import com.example.demo.repository.AuthorRepository;
import com.example.demo.repository.ConferenceRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.proposal.ProposalDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class ProposalMapperImpl implements ProposalMapper{

    private final ConferenceRepository conferenceRepository;

    private final AuthorRepository authorRepository;

    @Override
    public ProposalDto toService(Proposal entity) {
        List<Long> authorsId = new ArrayList<>();
        List<Author> authors = entity.getAuthorList();
        for (Author author: authors){
            authorsId.add(author.getAuthorId());
        }
        return new ProposalDto(entity.getProposalId(), entity.getName(), entity.getPaper(), entity.getKeywords(), entity.getTopics(),
                authorsId, entity.getConference().getConferenceId());
    }

    @Override
    public Proposal toEntity(ProposalDto dto) {
        var authorsId = dto.getAuthorsId();
        List<Author> authorList = new ArrayList<>();

        Conference conference = conferenceRepository.getOne(dto.getConferenceId());

        for (Long authorId: authorsId){
            Author author = new Author();
            author.setAuthorId(authorId);

            User currentUser = authorRepository.getOne(dto.getAuthorsId().get(0)).getUser();
            author.setUser(currentUser);
            author.setConference(conference);

            authorList.add(author);
        }

        return new Proposal(dto.getProposalId(), dto.getName(), dto.getPaper(), dto.getKeywords(), dto.getTopics(),
                conference,authorList);
    }
}
