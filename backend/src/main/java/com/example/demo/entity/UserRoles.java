package com.example.demo.entity;

public enum UserRoles {
    COMMITTEE_MEMBER("COMMITTEE_MEMBER"), ADMIN("ADMIN"), AUTHOR("AUTHOR"),USER("USER");

    private final String text;

    /**
     * @param text
     */
    UserRoles(final String text) {
        this.text = text;
    }

    /* (non-Javadoc)
     * @see java.lang.Enum#toString()
     */
    @Override
    public String toString() {
        return text;
    }
}
