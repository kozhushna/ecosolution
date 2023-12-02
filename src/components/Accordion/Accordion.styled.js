import styled from '@emotion/styled';

export const AccordionHolder = styled.div`
  width: 500px;
`;

export const Item = styled.div`
  background: #f0ebe1;
  margin-bottom: 5px;
  padding: 10px 20px;
`;

export const TitleWrapper = styled.div`
  color: #85662b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const Title = styled.h3``;

export const Description = styled.div`
  &.content {
    color: #8b7f75;
    max-height: 0;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0, 1, 0, 1);
  }
  &.show {
    height: auto;
    max-height: 9999px;
    transition: all 0.5s cubic-bezier(1, 0, 1, 0);
  }
`;
