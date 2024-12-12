// Copyright 2020 Datafuse Labs.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.less' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.gif' {
  const value: string;
  export default value;
}
declare module '*.jpeg' {
  const value: string;
  export default value;
}
declare module 'thousands';
declare module 'bytes';
declare module 'react-csv';
declare module 'react-syntax-highlighter/dist/esm/styles/prism';
declare module '@databendcloud/databend-icons';
declare module 'clsx';