import { t } from '../utils';

export default () => (
  <div className="error">
    <div className="title">{t('notFoundTitle')}</div>
    <div className="context">{t('notFoundMsg')}</div>
  </div>
);
