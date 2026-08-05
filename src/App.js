import React from 'react';
import { Helmet } from 'react-helmet';

// VW Japan version of the StoryStream Feature App.
//
// Unlike the VW South Africa reference build (storystream-feature-app.umd.js),
// this does NOT load an iframe from a market-specific "apps.<market>" domain
// (VW Japan has no equivalent hosting domain set up). Instead it uses
// StoryStream's own CDN-hosted embed script directly, matching the method
// StoryStream recommended in their "Measure Endpoint" onboarding email
// (easiest integration, no market-side hosting required) and the embed
// pattern already used in "StoryStream x VW Japan - Experience Codes.xlsx".
var App = function App(_ref) {
  var id = _ref.id;

  return (
    <>
      <Helmet>
        <script src={`https://apps.storystream.ai/app/js/${id}.js`} defer />
        {/*
          Placeholder for a future VW Japan analytics/tag-management bootstrap
          script (equivalent to VWSA's "test.js"), once the Analytics set-up
          task from the 2026/07/30 StoryStream status email is resolved
          (Measure Endpoint vs. Adobe Analytics data layer push).
          e.g. <script src="https://apps.vw.co.jp/feature-apps/storystream/analytics.js" defer />
        */}
      </Helmet>
      <div id="stry-wrapper" />
    </>
  );
};

export default App;
