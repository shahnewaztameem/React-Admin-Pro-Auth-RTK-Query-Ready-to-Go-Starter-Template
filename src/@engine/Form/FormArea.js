import styled from '@emotion/styled';
import { Tag } from 'antd';
import PropTypes from 'prop-types';
import { FileTextOutlined } from '@ant-design/icons';

const MainWrap = styled.div`
  .card {
    border: 0;
  }
`;

const MasterGrid = styled.div`
  position: relative;
  border: 2px solid #e0dee0;
  border-radius: 2px;
  margin: 0;
  padding: 0;
  background: #fff;
`;

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0dee0;
  background: #fff;
`;

const GridTitle = styled.div`
  padding-top: 5px;

  h6 {
    margin: 0 0 3px 0;
  }
`;

const FormArea = ({ children, mainTitle, codeTitle, code }) => {
  return (
    <MainWrap>
      <div>
        <MasterGrid>
          <TitleArea className="p-2 px-3">
            <GridTitle>
              <h6 className="font-size-base">
                <span className="mr-1">
                  <FileTextOutlined />{' '}
                </span>{' '}
                {mainTitle}
              </h6>
            </GridTitle>
            {codeTitle && code && (
              <GridTitle>
                <Tag className="mr-0">
                  <h6 style={{ color: 'green', fontWeight: 'bold' }}>
                    {codeTitle} : {code}
                  </h6>
                </Tag>
              </GridTitle>
            )}
          </TitleArea>
          <div className="p-3">{children}</div>
        </MasterGrid>
      </div>
    </MainWrap>
  );
};

FormArea.propTypes = {
  children: PropTypes.node.isRequired,
  mainTitle: PropTypes.string.isRequired,
  codeTitle: PropTypes.string,
  code: PropTypes.string,
};

FormArea.defaultProps = {
  codeTitle: '',
  code: '',
};

export default FormArea;
