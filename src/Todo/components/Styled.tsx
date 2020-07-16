import styled from 'styled-components';


const ListStyled = styled.div`
  max-width: 500px;
  box-shadow: 2px 2px 16px rgba(0, 0, 0, .35);
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  padding: 0 30px;
  
  min-height: 60px;

  p, input {
    font: 1em sans-serif;
    margin: 5px 0;
    font-size: 20px;
    font-weight: normal;
    border: 0;
    padding: 10px 0;
  }

  button {
    border: 0;
    background: #fff;
    padding: 2.5px;
    margin: 0 10px;
    cursor: pointer;
  }

  .uuid {
    position: absolute;
    bottom: 2px;
    right: 5px;
    font-size: 10px;
  }
`;

const InputStyled = styled.div`
  border: 1px solid rgba(0, 0, 0, .15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin: 20px;

  max-width: 500px;

  box-shadow: 2px 2px 6px rgba(0, 0, 0, .35);

  input {
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 15);
    background: transparent;
    flex: 1;
    padding: 5px;
  }

  button {
    border: 0;
    background: transparent;
    padding: 5px;
    margin-left: 10px;
    margin-right: 10px;

    cursor: pointer;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
      outline: none;
  }


`


const Styled = {
  ListStyled,
  InputStyled,
}

export default Styled;