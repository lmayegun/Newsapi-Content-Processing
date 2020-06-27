import React from 'react';

import {PageLayout} from '@newsApi/components';
import ContentForm from './shared-components/ContentForm';

const EditContent = ()=>{
  return(
    <PageLayout
      header={
        <h1> Forward </h1>
      }
      content={
        <div>
          <ContentForm
            formType='forward'
          />
        </div>
      }
    />
  )
};
export default EditContent;
