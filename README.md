## Data Storage

### Local Storage vs. Cloud Storage

- **Local Storage**: For user preferences and small datasets that need to be quickly accessible without internet connectivity, I utilized AsyncStorage. This choice was made to enhance the app's responsiveness and provide a seamless user experience in offline mode. Data such as imported custom fonts and icons were stored using this method.
- **Cloud Storage**: For larger datasets, such as product information and images, etc., the fakestoreapi service was used.


## Design Choices

### Navigation

- Navigation was handled by using a drawer navigator to support navigation from the homescreen and the cart.
- Navigation between the home and detail screens were handled using a stack navigator within the home component of the drawer navigator.

### Theming and Custom Components

- Where necessary, custom components such as icons and fonts were created or imported to address specific UI requirements not covered by React Native Elements.

