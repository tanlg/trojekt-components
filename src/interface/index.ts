import { ChangeEvent } from 'react';

export interface TextEditorProps {
  containerClassName: '',
  editorClassName: '',
  controlsClassName: '',
  placeholder: '',
  uploadImageUrl: '/api/upload_file',
  readOnly: false,
  showStyleControl: true,
  stripPastedStyles: false,
  enableImageTool: true,
  onChange?: (e: ChangeEvent<Element>) => void;
}

export interface TextEditorState {
  showInsertLink?: boolean,
  focusingUrl: '',
  insertingText: '',
  insertingLink: '',
  showFontSizeControl: false,
}