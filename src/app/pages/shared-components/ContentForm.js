import React  from 'react';
import {withRouter} from 'react-router-dom';
import {TextField} from '@material-ui/core';

import {makeStyles} from '@material-ui/styles';
import _ from '@lodash';

import {Select, TextEditor, TagsSelect, ImageUpload} from '@newsApi/components/FormElements';

const ContentForm = (props)=>{

  const { formType, formImages, formActions, form, setForm, handleChange, handleFile} = props;

  const classes = useStyles();

  function handleChipChange(value, name){
    setForm(_.set({...form}, name, value.map(item => item.value)));
  };

  return(
    <div>
      {(form || (formType === 'new') ) && (
        <form className={classes.root} noValidate autoComplete="off">
          <div style={{flex:4}}>
            <div className={classes.field}>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                name="title"
                value={form.title ? form.title : ''}
                onChange={handleChange}
                style={{width:100+'%'}}
              />
            </div>

            {formImages && (
              <div className={classes.field}>
                {formImages}
              </div>
            )}

            <div className={classes.field}>
              <TextEditor
                label={"Description"}
                name={"description"}
                setForm={setForm}
                form={form}
                value={form.description ? form.description : ''}
              />
            </div>

            <div className={classes.field}>
              <TextEditor
                label={"Body"}
                name={"content"}
                setForm={setForm}
                form={form}
                value={form.content ? form.content : ""}
              />
            </div>
          </div>
          <div style={{flex:2}}>

            <div className={classes.field}>
              <Select
                label={"Category"}
                handleChange={handleChange}
                value={form.category}
                name={"category"}
                options={[{news:'News'}, {knowledge:'Knowledge'}, {health:'Health'}, {sport:'Sports'}, {business:'Business'}, {entertainment:'Entertainment'}]}
                className={"selector"}
              />
            </div>

            <div className={classes.field}>
              <TextField
                id="outlined-basic"
                label="Author"
                variant="outlined"
                name="author"
                onChange={handleChange}
                value={form.author}
                style={{width:100+'%'}}
              />
            </div>

            <div className={classes.field}>
              <TextField
                id="outlined-basic"
                label="Source"
                variant="outlined"
                name="source"
                onChange={handleChange}
                value={form.source ? form.source.name : ''}
                style={{width:100+'%'}}
              />
            </div>

            <div className={classes.field}>
              <TextField
                type="datetime-local"
                id="outlined-basic"
                variant="outlined"
                name="publishedAt"
                onChange={handleChange}
                value={"2020-06-07T12:25"}
                style={{width:100+'%'}}
              />
            </div>

            <div className={classes.field}>
              <TagsSelect
                  className="mt-8 mb-24"
                  value={
                    form.tags.map(item => ({
                      value: item,
                      label: item
                    }))
                  }
                  onChange={(value) => handleChipChange(value, 'tags')}
                  placeholder="Select multiple categories"
                  textFieldProps={{
                      label : 'Tags',
                      InputLabelProps: {
                          shrink: true
                      },
                      variant : 'outlined'
                  }}
                  isMulti
                />
            </div>

            <div className={classes.field}>
              <ImageUpload
                id="image"
                name="thumbImage"
                onInput={handleFile}
              />
            </div>
          </div>
        </form>
      )}
      <div className={classes.fieldAction}>
         {formActions && (
           formActions
         )}
      </div>
    </div>
  )
};

export default withRouter(React.memo(ContentForm));


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: 100+'%',
    },
    [theme.breakpoints.down('md')]:{
      flexDirection:'column'
    }
  },
  reactQuill:{
    minHeight: 500
  },
  field:{
    margin: theme.spacing(3, 1, 1, 0),
    width: 100+'%',
    display: 'inline-block',
  },
  selector:{
    margin: theme.spacing(3, 1, 1, 0),
    width: 99+'%',
  },
  fieldAction:{
    display:'flex',
    justifyContent:'center',
    margin:theme.spacing(5),
    '& .btn':{
      margin:2,
    }
  }
}));
