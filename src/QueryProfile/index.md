### Query Profile

```jsx
import { QueryProfile } from 'databend-profile-ui';
import { DEMO } from './demo';

export default () => (
  <QueryProfile isDemo={true} outValue={JSON.parse(DEMO)} profileRef={'body'} />
);
```

### Test Query Profile

```jsx
import { TestProfile } from 'databend-profile-ui';

export default () => <TestProfile isDemo />;
```

### QueryProfile props

```javascript

pileRef?: any;
queryDuration: number;
orgSlug?: string;
queryId?: string;
outValue?: string;
countShow?: number;
offsetWidth?: number;
offsetHeight?: number;
showTextArea?: boolean;
initLoading?: boolean;
isDemo?: boolean;
isLight?: boolean;

```
