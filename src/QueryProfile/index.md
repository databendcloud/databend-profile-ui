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

export default () => <TestProfile isDemo isNeedMetrics={true} />;
```
