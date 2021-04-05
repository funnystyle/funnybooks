import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  bookResults,
  tvResults,
  searchTerm,
  handleSubmit,
  loading,
  error,
  updateTerm,
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Books..."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {bookResults && bookResults.length > 0 && (
          <Section title="Movie Results">
            {/* {bookResults.map((movie) => (
              <span key={movie.id}>{movie.title}</span>
            ))} */
            bookResults.map(book => console.log(book))}

          </Section>
        )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  bookResults: PropTypes.array,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
