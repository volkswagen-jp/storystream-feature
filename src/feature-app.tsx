import React from 'react';
import App from './App';

// Default StoryStream Configuration ID for VW Japan, used only as a fallback
// when the OneHub CMS "Feature App Content" configuration is not set on a
// page. This is the Homepage / Mosaic experience ID from
// "StoryStream x VW Japan - Experience Codes.xlsx" so that an unconfigured
// placement still renders something sensible rather than falling back to a
// different market's content (as the VWSA build does with its own ID).
const DEFAULT_JP_STORYSTREAM_APP_ID = 'ZWVkODYwYWQyOTQ4OWEyNmE5';

// Define the feature app
const featureAppDefinition = {
  optionalDependencies: {
    featureServices: {
      'fa-content-service': '^1.0.0',
    },
  },
  create: ({ featureServices }) => ({
    render: () => {
      const content = featureServices['fa-content-service']?.content;

      // IMPORTANT: field name must be "storyStreamAppId" to match the
      // "Feature App Content" configuration schema used by OneHub
      // (see the Config JSON / Schema shared by VWSA in the "Feature app for
      // Storystream" email thread). The VWSA non-tracking build reads
      // "configurationID" instead, which does not match that schema and
      // silently falls back to VWSA's own default ID on every page.
      const configID = content?.storyStreamAppId ?? DEFAULT_JP_STORYSTREAM_APP_ID;

      return <App id={configID} />;
    },
  }),
};

export default featureAppDefinition;
