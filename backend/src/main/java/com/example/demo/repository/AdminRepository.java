package com.example.demo.repository;

import com.example.demo.entity.user.Admin;
import com.example.demo.entity.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
    //Optional<Admin> findById(Long Id);
    Optional<Admin> findByUser(User user);

    boolean existsAdminByUserUsername(String user_username);
}
