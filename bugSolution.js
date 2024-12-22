```javascript
import * as DocumentPicker from 'expo-document-picker';

const pickMultipleFiles = async () => {
  try {
    const result = await DocumentPicker.getDocumentAsync({
      multiple: true,
    });

    if (result.type === 'success') {
      // Use a Set to remove duplicate URIs
      const uniqueUris = [...new Set(result.uris)];
      console.log('Unique URIs:', uniqueUris);
      // Process the unique URIs
    } else {
      console.log('Canceled');
    }
  } catch (error) {
    console.error('Error picking documents:', error);
  }
};
```