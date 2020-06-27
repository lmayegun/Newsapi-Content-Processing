import React from 'react';

import {PageLayout} from '@newsApi/components';
import ContentForm from './shared-components/ContentForm';

const EditContent = ()=>{
  return(
    <PageLayout
      header={
        <h1> New Content</h1>
      }
      content={
        <div>
          <ContentForm
            formType='new'
          />
        </div>
      }
    />
  )
};
export default EditContent;
