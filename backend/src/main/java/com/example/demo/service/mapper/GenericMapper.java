package com.example.demo.service.mapper;


public interface GenericMapper<T, TDto> {
    TDto toService(T entity);
    T toEntity(TDto dto);
}
