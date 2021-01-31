import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const StyledItem = styled.li`
  color: white;
  display: flex;
  flex-direction: column;
  margin: 20px;
  text-align: center;
  padding: 10px;

  .img {
    height: 300px;
    width: 350px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
`;
