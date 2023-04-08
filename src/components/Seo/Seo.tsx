import { Helmet } from 'react-helmet';
import { META_DATA } from 'constants/common';

type SeoProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  userName?: string;
};
const Seo = ({
  title = META_DATA.title,
  description = META_DATA.description,
  url = META_DATA.url,
  image = META_DATA.image,
  userName = META_DATA.userName,
}: SeoProps) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={title} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={userName} />
    </Helmet>
  );
};

export default Seo;
