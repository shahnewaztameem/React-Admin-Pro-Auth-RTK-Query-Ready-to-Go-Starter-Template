/** @jsxImportSource @emotion/react */
import AppBreadcrumb from 'components/layout-components/AppBreadcrumb';
import { css } from '@emotion/react';
import { MEDIA_QUERIES } from 'constants/ThemeConstant';
import IntlMessage from '../util-components/IntlMessage';

export function PageHeader({ title, display }) {
  return display ? (
    <div
      css={css`
        align-items: center;
        margin-bottom: 1rem;

        @media ${MEDIA_QUERIES.LAPTOP_ABOVE} {
          display: flex;
        }
      `}
    >
      <h3 className="mb-0 mr-3 font-weight-semibold">
        <IntlMessage id={title || 'home'} />
      </h3>
      <AppBreadcrumb />
    </div>
  ) : null;
}

export default PageHeader;
