import styled from "styled-components";

export const FaqStyles = styled.section`
  margin-top: -3.2rem;
  margin-bottom: 9.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .faq-heading {
    font-weight: 800;
    font-size: 2.25rem;
    line-height: 3.125rem;
    margin-bottom: 3.125rem;
    text-align: center;
  }

  .faqs-container {
    width: 60rem;
    background: linear-gradient(
      180deg,
      #f5f5f5 0%,
      rgba(255, 255, 255, 0.89) 100%
    );
    border-radius: 1.25rem;
    padding: 1.875rem 1.875rem 4.5rem 1.875rem;
  }
`;