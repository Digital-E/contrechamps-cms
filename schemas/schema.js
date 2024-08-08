import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import richText from './objects/richText'
import openGraph from './objects/openGraph'
import captionImage from './objects/captionImage'
import article from './documents/article'
import author from './documents/author'
import home from './documents/home'
import post from './documents/post'
import news from './documents/news'
import saison from './documents/saison'
import mediaPage from './documents/mediaPage'
import presse from './documents/presse'
import video from './documents/video'
import disque from './documents/disque'
import photo from './documents/photo'
import lEnsemble from './documents/lEnsemble'
import lEnsembleMenu from './documents/lEnsembleMenu'
import lesMusiciens from './documents/lesMusiciens'
import lesMusiciensMenu from './documents/lesMusiciensMenu'
import legal from './documents/legal'
import menu from './documents/menu'
import footer from './documents/footer'
import documents from './documents/documents'
import inclusivite from './documents/inclusivite'
import inclusiviteMenu from './documents/inclusiviteMenu'
import { translateFields } from './fieldTranslation'

export default createSchema({
  name: 'default',
  types: schemaTypes
    .concat([
      // Any base object you've defined,
      // or document type that should not have
      // field-level validations
      richText,
      openGraph,
      captionImage,
      home,
      post,
      news,
      saison,
      mediaPage,
      presse,
      video,
      disque,
      photo,
      lEnsemble,
      lEnsembleMenu,
      lesMusiciens,
      lesMusiciensMenu,
      legal,
      menu,
      footer,
      documents,
      inclusivite,
      inclusiviteMenu
    ])
    // Include documents with field translation support.
    // This changes their structure, transforming
    // simple fields like 'string' into 'object'
    // with multiple string properties, one per
    // language.
    //
    // Any document definition that does
    // not set localize: true on root level, or
    // set localize: true on any field level will
    // not be changed.
    // .concat(translateFields([
    //   article,
    //   author
    // ]))
})
