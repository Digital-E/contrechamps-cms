import S from '@sanity/desk-tool/structure-builder'
import * as I18nS from 'sanity-plugin-intl-input/lib/structure'
import { i18n } from './schemas/documentTranslation'

import {
  GrDocumentText as FieldIcon,
  GrMultiple as DocumentIcon,
  GrTextAlignLeft as PostIcon,
  GrUser as AuthorIcon,
  GrArticle as ArticleIcon
} from 'react-icons/gr'

export const getDefaultDocumentNode = (props) => {
  if (
      props.schemaType === 'post'
      ||
      props.schemaType === 'news'
      ||
      props.schemaType === 'home'
      ||
      props.schemaType === 'saison'
      ||
      props.schemaType === 'mediaPage'
      ||
      props.schemaType === 'presse'
      ||
      props.schemaType === 'video'
      ||
      props.schemaType === 'disque'
      ||
      props.schemaType === 'photo'
      ||
      props.schemaType === 'lEnsemble'
      ||
      props.schemaType === 'lEnsembleMenu'
      ||
      props.schemaType === 'lesMusiciens'
      ||
      props.schemaType === 'lesMusiciensMenu'
      ||
      props.schemaType === 'menu'
      ||
      props.schemaType === 'footer'
      ||
      props.schemaType === 'legal'
      ||
      props.schemaType === 'documents'
      ||
      props.schemaType === 'inclusivite'      
      ) {
    return S.document().views(I18nS.getDocumentNodeViewsForSchemaType(props.schemaType));
  }

  return S.document();
};

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home')
        .icon(PostIcon)      
        .child(
            S.document()
            .title('Home')
            .id('home')
            .schemaType('home')
            .views(I18nS.getDocumentNodeViewsForSchemaType('home'))
        ),
      S.listItem()
        .title('Saison')
        .icon(PostIcon)      
        .child(
            S.document()
            .title('Saison')
            .id('saison')
            .schemaType('saison')
            .views(I18nS.getDocumentNodeViewsForSchemaType('saison'))
        ), 
      S.listItem()
        .title('Événements')
        .icon(DocumentIcon)
        .child(
          S.list()
            .id('events')
            .title('Events')
            .items([
              S.listItem()
                .title('Événements')
                .id('post-docs')
                .icon(PostIcon)
                .schemaType('post')
                .child(
                  S.documentList()
                    .id('post')
                    .title('Événements')
                    .defaultOrdering([{field: 'startdate', direction: 'desc'}])
                    .menuItems([
                      S.orderingMenuItem({title: 'Date ascending', by: [{ field: "startdate", direction: "asc" }]}),
                      S.orderingMenuItem({title: 'Date descending', by: [{ field: "startdate", direction: "desc" }]}),
                      // S.orderingMenuItem({title: 'Created At ascending', by: [{ field: "_createdAt", direction: "asc" }]}),
                      // S.orderingMenuItem({title: 'Created At descending', by: [{ field: "_createdAt", direction: "desc" }]})
                      ])
                    // Use a GROQ filter to get documents.
                    .filter('_type == "post" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'post'
                    })
                )
            ]
            )
        ),
        S.listItem()
        .title('Actualités')
        .icon(DocumentIcon)
        .child(
          S.list()
            .id('news')
            .title('Actualités')
            .items([
              S.listItem()
                .title('Actualités')
                .id('news')
                .icon(PostIcon)
                .schemaType('news')
                .child(
                  S.documentList()
                    .id('news')
                    .title('Événements')
                    .defaultOrdering([{field: 'startdate', direction: 'asc'}])
                    .menuItems([
                      S.orderingMenuItem({title: 'Date ascending', by: [{ field: "startdate", direction: "asc" }]}),
                      S.orderingMenuItem({title: 'Date descending', by: [{ field: "startdate", direction: "desc" }]})
                      ])
                    // Use a GROQ filter to get documents.
                    .filter('_type == "news" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'news'
                    })
                )
            ]
            )
        ),        
      S.listItem()
        .title("À Propos")
        .icon(DocumentIcon)
        .child(
          S.list()
            .id('lEnsemble')
            .title("À Propos")
            .items([
              S.listItem()
              .title('Menu')
              .icon(DocumentIcon)      
              .child(
                  S.document()
                  .title('Menu')
                  .id('lEnsembleMenu')
                  .schemaType('lEnsembleMenu')
                  .views(I18nS.getDocumentNodeViewsForSchemaType('lEnsembleMenu'))
              ),
              S.listItem()
                .title("À Propos")
                .id('lEnsemble')
                .icon(PostIcon)
                .schemaType('lEnsemble')
                .child(
                  S.documentList()
                    .id('lEnsemble')
                    .title("À Propos")
                    // Use a GROQ filter to get documents.
                    .filter('_type == "lEnsemble" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'lEnsemble'
                    })
                ),
              S.listItem()
              .title('Les Musiciens Menu')
              .icon(DocumentIcon)      
              .child(
                  S.document()
                  .title('Les Musiciens Menu')
                  .id('lesMusiciensMenu')
                  .schemaType('lesMusiciensMenu')
                  .views(I18nS.getDocumentNodeViewsForSchemaType('lesMusiciensMenu'))
              ),
              S.listItem()
                .title("Les Musiciens")
                .id('lesMusiciens')
                .icon(PostIcon)
                .schemaType('lesMusiciens')
                .child(
                  S.documentList()
                    .id('lesMusiciens')
                    .title("Les Musiciens")
                    // Use a GROQ filter to get documents.
                    .filter('_type == "lesMusiciens" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'lesMusiciens'
                    })
                ),                              
            ]
            )
        ),        
      S.listItem()
        .title('Media')
        .icon(DocumentIcon)
        .child(        
          S.list()
            .id('media')
            .title('Media')
            .items([
              S.listItem()
                .title('Page Presse')
                .icon(DocumentIcon)
                .schemaType('mediaPage')
                .child(
                  S.document()
                  .title('Page Presse')
                  .id('pressePage')
                  .schemaType('mediaPage')
                  .views(I18nS.getDocumentNodeViewsForSchemaType('mediaPage'))
                ),
              S.listItem()
                .title('Presse')
                .id('presse')
                .icon(PostIcon)
                .schemaType('presse')
                .child(
                  S.documentList()
                    .id('presse')
                    .title('Presse')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "presse" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'presse'
                    })
                ),
                S.listItem()
                .title('Page Videos')
                .icon(DocumentIcon)
                .schemaType('mediaPage')
                .child(
                  S.document()
                  .title('Page Videos')
                  .id('videosPage')
                  .schemaType('mediaPage')
                  .views(I18nS.getDocumentNodeViewsForSchemaType('mediaPage'))
                ),                
              S.listItem()
                .title('Vidéos')
                .id('videos')
                .icon(PostIcon)
                .schemaType('video')
                .child(
                  S.documentList()
                    .id('videos')
                    .title('Vidéos')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "video" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'video'
                    })
                ),
                S.listItem()
                .title('Page Disques')
                .icon(DocumentIcon)
                .schemaType('mediaPage')
                .child(
                  S.document()
                  .title('Page Disques')
                  .id('disquesPage')
                  .schemaType('mediaPage')
                  .views(I18nS.getDocumentNodeViewsForSchemaType('mediaPage'))
                ),                   
              S.listItem()
                .title('Disques')
                .id('disques')
                .icon(PostIcon)
                .schemaType('disque')
                .child(
                  S.documentList()
                    .id('disque')
                    .title('Disques')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "disque" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'disque'
                    })                  
                ),
                S.listItem()
                .title('Page Photos')
                .icon(DocumentIcon)
                .schemaType('mediaPage')
                .child(
                  S.document()
                  .title('Page Photos')
                  .id('photosPage')
                  .schemaType('mediaPage')
                  .views(I18nS.getDocumentNodeViewsForSchemaType('mediaPage'))
                ),                
              S.listItem()
                .title('Photos')
                .id('photos')
                .icon(PostIcon)
                .schemaType('photo')
                .child(
                  S.documentList()
                    .id('photos')
                    .title('Photos')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "photo" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'photo'
                    })
                )                                                    
            ]
            )
        ),                         
      S.listItem()
        .title('Menu')
        .icon(PostIcon)      
        .child(
            S.document()
            .title('Menu')
            .id('menu')
            .schemaType('menu')
            .views(I18nS.getDocumentNodeViewsForSchemaType('menu'))
        ),
      S.listItem()
        .title('Footer')
        .icon(PostIcon)      
        .child(
            S.document()
            .title('Footer')
            .id('footer')
            .schemaType('footer')
            .views(I18nS.getDocumentNodeViewsForSchemaType('footer'))
        ),
      S.listItem()
        .title('Legal')
        .icon(PostIcon)      
        .child(
            S.document()
            .title('Legal')
            .id('legal')
            .schemaType('legal')
            .views(I18nS.getDocumentNodeViewsForSchemaType('legal'))
        ),
      S.listItem()
        .title('Documents')
        .icon(PostIcon)      
        .child(
            S.document()
            .title('Documents')
            .id('documents')
            .schemaType('documents')
            .views(I18nS.getDocumentNodeViewsForSchemaType('documents'))
        ),
      S.listItem()
        .title("Inclusivite")
        .icon(DocumentIcon)
        .child(
          S.list()
            .id('inclusivite')
            .title("Inclusivite")
            .items([
              S.listItem()
              .title('Menu')
              .icon(DocumentIcon)      
              .child(
                  S.document()
                  .title('Menu')
                  .id('inclusiviteMenu')
                  .schemaType('inclusiviteMenu')
                  .views(I18nS.getDocumentNodeViewsForSchemaType('inclusiviteMenu'))
              ),
              S.listItem()
                .title("Inclusivite")
                .id('inclusivite')
                .icon(PostIcon)
                .schemaType('inclusivite')
                .child(
                  S.documentList()
                    .id('inclusivite')
                    .title("Inclusivite")
                    // Use a GROQ filter to get documents.
                    .filter('_type == "inclusivite" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'inclusivite'
                    })
                )                           
            ]
            )
        ),                                               
    ])