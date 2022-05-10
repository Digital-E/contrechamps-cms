import defaultResolve, {PublishAction, DeleteAction} from 'part:@sanity/base/document-actions'
import { MyCustomAction } from './MyCustomAction'

export default function resolveDocumentActions(props) {
    if(props.type === "home") {
        return defaultResolve(props)
        .map(Action =>
          Action === DeleteAction ? 
            MyCustomAction : 
            // Action === PublishAction ?
            // MyCustomAction
            // :
            Action
        )
    } else {
        return defaultResolve(props)
        .map(Action => Action)
    }
}