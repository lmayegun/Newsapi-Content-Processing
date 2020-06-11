import React from 'react';


const PageLayout = ({content, header}) => {
  return(
    <div>
      {header && (
        <div>
          {header}
        </div>
      )}

      {content && (
        <div>
          {content}
        </div>
      )}
    </div>
  );
};

export default PageLayout;
