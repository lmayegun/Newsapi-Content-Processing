import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {TextField, Button, Typography} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

import {PageLayout} from '@newsApi/components';
import ContentForm from '../shared-components/ContentForm';
import {Dialog} from '@newsApi/components/UIElements';

const EditContent = ()=>{
  const articleState = useSelector( state => state.drupal8.drupal8Content);

  const [article, setArticle] = useState(articleState);

  useEffect(()=>{
    setArticle(articleState);
  },[articleState, setArticle]);

  return(
    <PageLayout
      header={
        <h1> Edit </h1>
      }
      content={
        <div>
          <ContentForm
            article={article}
            formType='edit'
            formActions={
              <>
                <Dialog
                   btnTitle={"Preview"}
                   closeTitle={'Close'}
                >
                   {/*--<a href={form.url} target="_blank" rel="noopener noreferrer"> {form.title} </a>
                   <div> {form.title} </div>
                   <div dangerouslySetInnerHTML={{__html:form.description}}/>
                   <div dangerouslySetInnerHTML={{__html:form.content}}/>*/}
                </Dialog>
                <Button
                   onClick={() => {alert("from drupal")}}
                   variant="contained"
                   color="primary"
                   size="small"
                    className={'btn'}
                   startIcon={<SaveIcon />}
                 >
                   Update
                 </Button>
                 <Button
                    onClick={() => {alert('delete')}}
                    variant="contained"
                    color="primary"
                    size="small"
                    className={'btn'}
                    startIcon={<SaveIcon />}
                  >
                    Delete
                  </Button>
                </>
            }
          />
        </div>
      }
    />
  );
};
export default EditContent;
