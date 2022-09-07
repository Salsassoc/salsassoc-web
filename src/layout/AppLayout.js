import React, {useState} from 'react';

import ProLayout from '@ant-design/pro-layout';

const AppLayout = (props) => {
  
  const [pathname, setPathname] = useState(window.location.pathname);

  return (
    <ProLayout
      location={{
        pathname,
      }}
      fixSiderbar
      //fixedHeader
      layout="mix"
      navTheme="dark"
      title="Salsassoc"
      footerRender={null}
    >
      <div>Test</div>
    </ProLayout>
  );
};

export default AppLayout;
