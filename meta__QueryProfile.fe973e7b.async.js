"use strict";(self.webpackChunkdatabend_profile_ui=self.webpackChunkdatabend_profile_ui||[]).push([[152],{25840:function(zn,X,o){o.r(X),o.d(X,{demos:function(){return Xn}});var yn=o(15009),i=o.n(yn),Kn=o(99289),q=o.n(Kn),W=o(67294),F=o(97753),w=o(61712),Dn=o(55753),Xn={"queryprofile-demo-0":{component:W.memo(W.lazy(q()(i()().mark(function cn(){var Y,nn,en,B;return i()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Promise.resolve().then(o.bind(o,61712));case 2:return Y=j.sent,nn=Y.QueryProfile,j.next=6,Promise.resolve().then(o.bind(o,55753));case 6:return en=j.sent,B=en.DEMO,j.abrupt("return",{default:function(){return W.createElement(nn,{isDemo:!0,outValue:JSON.parse(B),profileRef:"body"})}});case 9:case"end":return j.stop()}},cn)})))),asset:{type:"BLOCK",id:"queryprofile-demo-0",refAtomIds:["QueryProfile"],dependencies:{"index.jsx":{type:"FILE",value:`import { QueryProfile } from 'databend-profile-ui';
import { DEMO } from './demo';

export default () => (
  <QueryProfile isDemo={true} outValue={JSON.parse(DEMO)} profileRef={'body'} />
);`},"databend-profile-ui":{type:"NPM",value:"0.1.0"},"./demo.ts":{type:"FILE",value:o(45760).Z}},entry:"index.jsx"},context:{"./demo.ts":Dn,"databend-profile-ui":w,"/home/runner/work/databend-profile-ui/databend-profile-ui/src/QueryProfile/demo.ts":Dn},renderOpts:{compile:function(){var cn=q()(i()().mark(function nn(){var en,B=arguments;return i()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,o.e(335).then(o.bind(o,37335));case 2:return j.abrupt("return",(en=j.sent).default.apply(en,B));case 3:case"end":return j.stop()}},nn)}));function Y(){return cn.apply(this,arguments)}return Y}()}},"queryprofile-demo-1":{component:W.memo(W.lazy(q()(i()().mark(function cn(){var Y,nn;return i()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,Promise.resolve().then(o.bind(o,61712));case 2:return Y=B.sent,nn=Y.TestProfile,B.abrupt("return",{default:function(){return W.createElement(nn,{isDemo:!0})}});case 5:case"end":return B.stop()}},cn)})))),asset:{type:"BLOCK",id:"queryprofile-demo-1",refAtomIds:["QueryProfile"],dependencies:{"index.jsx":{type:"FILE",value:`import { TestProfile } from 'databend-profile-ui';

export default () => <TestProfile isDemo />;`},"databend-profile-ui":{type:"NPM",value:"0.1.0"}},entry:"index.jsx"},context:{"databend-profile-ui":w},renderOpts:{compile:function(){var cn=q()(i()().mark(function nn(){var en,B=arguments;return i()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,o.e(335).then(o.bind(o,37335));case 2:return j.abrupt("return",(en=j.sent).default.apply(en,B));case 3:case"end":return j.stop()}},nn)}));function Y(){return cn.apply(this,arguments)}return Y}()}}}},55753:function(zn,X,o){o.r(X),o.d(X,{DEMO:function(){return yn}});var yn=`{
        "query_id": "ffffff-ca85-429b-3333-7f0ba074ba40",
        "tenant": "dsfdfsafad",
        "warehouse": "ddfdfdf-12290927528",
        "warehouse_size": "Large",
        "profiles": [
            {
                "cpu_time": 0,
                "id": 7,
                "name": "TableScan",
                "parent_id": 5,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "defaultt.'clickbeddddd'.'orders'",
                "labels": [
                    {
                        "name": "Total partitions",
                        "value": [
                            "16"
                        ]
                    },
                    {
                        "name": "Full table name",
                        "value": [
                            "defaultt.'clickbeddddd'.'orders'"
                        ]
                    },
                    {
                        "name": "Columns (1 / 9)",
                        "value": [
                            "f_custkey"
                        ]
                    }
                ],
                "statistics": [
                    1989598053,
                    29714520422,
                    0,
                    0,
                    117623484,
                    940987872,
                    940987872,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": {
                    "MXv6j6mw7I7iqAZ9HKCon1": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 1.068248789
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 50
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 4.27322031699999
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 14677
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 24,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 14653,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 14672,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 126586706
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 14677
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 50,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 106,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 6973,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 7084,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 7183,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 7209,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 50
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 100
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 100
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 50
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 253173412
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 50
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 126586706
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 50
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 126586706
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 22,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 35,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ],
                    "W85FoM0nmEKwJ5vMXmczS6": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 1.277621996
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 52
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 5.596121807999999
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 16139
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 16120,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 16137,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 16138,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 16138,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 16138,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 23,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 138312874
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 16139
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 52,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 104,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 7838,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 7922,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 8003,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 8036,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 52
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 104
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 104
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 276625748
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 52
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 138312874
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 52
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 138312874
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 52
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 31,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ],
                    "XP1MqjBwxL5jW9lvGd7Sy7": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 7.0855691400000005
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 14171
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 1.259011292
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 49
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 14154,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 14168,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 14168,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 14170,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 14170,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 16,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 48,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 48,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 48,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 122518966
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 14171
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 49,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 102,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 6876,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 6942,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 7005,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 7022,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 49
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 98
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 98
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 245037932
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 49
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 122518966
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 49
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 122518966
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 49
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 6,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 47,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 39,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ],
                    "qLuPi9lHI51UAccHO6tij5": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 7.435440037000013
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 14965
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 1.0585076369999995
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 51
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 14947,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 14960,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 14960,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 14961,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 14961,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 129146872
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 14965
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 51,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 53,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 53,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 107,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 7203,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 7294,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 7366,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 7393,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 51
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 102
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 102
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 258293744
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 51
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 129146872
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 51
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 129146872
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 51
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 2,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 4,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 36,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ]
                },
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 2,
                "name": "AggregatePartial",
                "parent_id": 1,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "COUNT(*), sum(c_acctbal)",
                "labels": [
                    {
                        "name": "Grouping keys",
                        "value": [
                            "custsale.cntrycode (#28)"
                        ]
                    },
                    {
                        "name": "Aggregate Functions",
                        "value": [
                            "COUNT(*)",
                            "sum(c_acctbal)"
                        ]
                    }
                ],
                "statistics": [
                    14030377,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": null,
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 11,
                "name": "TableScan",
                "parent_id": 10,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "defaultt.'clickbeddddd'.'customer'",
                "labels": [
                    {
                        "name": "Columns (3 / 8)",
                        "value": [
                            "c_acctbal",
                            "c_custkey",
                            "c_phone"
                        ]
                    },
                    {
                        "name": "Total partitions",
                        "value": [
                            "16"
                        ]
                    },
                    {
                        "name": "Full table name",
                        "value": [
                            "defaultt.'clickbeddddd'.'customer'"
                        ]
                    }
                ],
                "statistics": [
                    1195790021,
                    4416056607,
                    0,
                    0,
                    14999995,
                    824999725,
                    824999725,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": {
                    "MXv6j6mw7I7iqAZ9HKCon1": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 0.30180643200000024
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 4051
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 0.26843945499999994
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 15
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 12,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 4051,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 34705491
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 4051
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 15,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 16,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 30,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 1862,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 1916,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 1964,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 1975,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 15
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 30
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 30
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 5
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 69410982
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 15
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 34705491
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 15
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 34705491
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 2,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 4,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ],
                    "W85FoM0nmEKwJ5vMXmczS6": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 1.478570624999996
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 6407
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 0.4401703699999999
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 21
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 11,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 6402,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 6406,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 6406,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 6406,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 6406,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 55157571
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 6407
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 21,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 22,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 44,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 3054,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 3083,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 3131,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 3151,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 7
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 42
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 42
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 110315142
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 21
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 55157571
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 21
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 55157571
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 21
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 2,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 6,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 4,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ],
                    "XP1MqjBwxL5jW9lvGd7Sy7": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 0.307361116
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 15
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 2.0972269870000053
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 4025
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 4020,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 4022,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 4022,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 4022,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 4022,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 34628900
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 4025
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 15,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 29,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 1921,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 1957,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 1976,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 1987,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 5
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 30
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 30
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 69257800
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 15
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 34628900
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 15
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 34628900
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 15
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 3,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 4,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ],
                    "qLuPi9lHI51UAccHO6tij5": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 2.7740308989999924
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 6368
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 0.4124586830000001
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 21
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 6360,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 6366,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 6366,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 6366,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 6366,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 12,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 55051085
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 6368
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 21,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 41,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 3099,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 3131,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 3155,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 3166,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 7
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 42
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 42
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 110102170
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 21
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 55051085
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 21
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 55051085
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 21
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 6,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 4,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ]
                },
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 1,
                "name": "AggregateFinal",
                "parent_id": 0,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "COUNT(*), sum(c_acctbal)",
                "labels": [
                    {
                        "name": "Aggregate Functions",
                        "value": [
                            "COUNT(*)",
                            "sum(c_acctbal)"
                        ]
                    },
                    {
                        "name": "Grouping keys",
                        "value": [
                            "custsale.cntrycode (#28)"
                        ]
                    }
                ],
                "statistics": [
                    954537,
                    0,
                    0,
                    0,
                    7,
                    257,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": null,
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 15,
                "name": "AggregatePartial",
                "parent_id": 13,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "sum(c_acctbal), count(c_acctbal)",
                "labels": [
                    {
                        "name": "Aggregate Functions",
                        "value": [
                            "sum(c_acctbal)",
                            "count(c_acctbal)"
                        ]
                    }
                ],
                "statistics": [
                    16749443,
                    0,
                    0,
                    0,
                    64,
                    1600,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": null,
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 18,
                "name": "TableScan",
                "parent_id": 17,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "defaultt.'clickbeddddd'.'customer'",
                "labels": [
                    {
                        "name": "Full table name",
                        "value": [
                            "defaultt.'clickbeddddd'.'customer'"
                        ]
                    },
                    {
                        "name": "Total partitions",
                        "value": [
                            "16"
                        ]
                    },
                    {
                        "name": "Columns (2 / 8)",
                        "value": [
                            "c_acctbal",
                            "c_phone"
                        ]
                    }
                ],
                "statistics": [
                    986795649,
                    5119734976,
                    0,
                    0,
                    14999995,
                    704999765,
                    704999765,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": {
                    "MXv6j6mw7I7iqAZ9HKCon1": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 0.236900044
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 10
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 1.2314700430000052
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 3670
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 2,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 3666,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 31756738
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 3670
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 10,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 19,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 1781,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 1795,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 1812,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 1819,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 10
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 20
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 20
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 5
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 63513476
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 10
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 31756738
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 10
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 31756738
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 4,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ],
                    "W85FoM0nmEKwJ5vMXmczS6": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 0.31553341
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 14
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 1.619382037000004
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 5795
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 5782,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 5794,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 50470860
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 5795
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 14,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 27,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 2792,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 2814,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 2836,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 2845,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 7
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 28
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 28
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 100941720
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 14
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 50470860
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 14
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 50470860
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 14
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 6,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ],
                    "XP1MqjBwxL5jW9lvGd7Sy7": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 1.588360984000003
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 3659
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 0.212095375
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 10
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 4,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 3654,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 3658,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 3658,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 3658,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 3658,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 31686547
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 3659
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 10,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 19,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 1788,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 1797,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 1808,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 1813,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 5
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 20
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 20
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 63373094
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 10
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 31686547
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 10
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 31686547
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 10
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 4,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ],
                    "qLuPi9lHI51UAccHO6tij5": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 2.6889280109999927
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 5807
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 0.300029295
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 14
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 5802,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 5805,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 5805,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 5805,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 5805,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 50337580
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 5807
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 14,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 27,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 2848,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 2861,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 2881,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 2889,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 7
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 28
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 28
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 100675160
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 14
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 50337580
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 14
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 50337580
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 14
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 6,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 4,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ]
                },
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 5,
                "name": "HashJoin",
                "parent_id": 4,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "(customer.c_custkey (#0) = orders.f_custkey (#20))",
                "labels": [
                    {
                        "name": "Join Build Side Keys",
                        "value": [
                            "customer.c_custkey (#0)"
                        ]
                    },
                    {
                        "name": "Join Type",
                        "value": [
                            "RIGHT ANTI"
                        ]
                    },
                    {
                        "name": "Join Probe Side Keys",
                        "value": [
                            "orders.f_custkey (#20)"
                        ]
                    }
                ],
                "statistics": [
                    4319630665,
                    10540906459,
                    0,
                    0,
                    636749,
                    27380207,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": null,
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 12,
                "name": "EvalScalar",
                "parent_id": 8,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "sum(c_acctbal) (#16) / CAST(if(CAST(count(c_acctbal) (#17) = 0 AS Boolean NULL), 1, count(c_acctbal) (#17)) AS UInt64 NULL)",
                "labels": [
                    {
                        "name": "List of Expressions",
                        "value": [
                            "sum(c_acctbal) (#16) / CAST(if(CAST(count(c_acctbal) (#17) = 0 AS Boolean NULL), 1, count(c_acctbal) (#17)) AS UInt64 NULL)"
                        ]
                    }
                ],
                "statistics": [
                    56172,
                    0,
                    0,
                    0,
                    1,
                    17,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": null,
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 8,
                "name": "HashJoin",
                "parent_id": 5,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "CAST(customer.c_acctbal (#5) AS Decimal(15, 2) NULL) > scalar_subquery_18 (#18)",
                "labels": [
                    {
                        "name": "Join Type",
                        "value": [
                            "INNER"
                        ]
                    },
                    {
                        "name": "Join Conditions",
                        "value": [
                            "CAST(customer.c_acctbal (#5) AS Decimal(15, 2) NULL) > scalar_subquery_18 (#18)"
                        ]
                    }
                ],
                "statistics": [
                    191044754,
                    5696354771,
                    0,
                    0,
                    1909667,
                    97393017,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": null,
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 17,
                "name": "Filter",
                "parent_id": 15,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "customer.c_acctbal (#13) > 0.00",
                "labels": [
                    {
                        "name": "Filter condition",
                        "value": [
                            "customer.c_acctbal (#13) > 0.00",
                            "contains(['13', '31', '23', '29', '30', '18', '17'], substr(customer.c_phone (#12), 1, 2))"
                        ]
                    }
                ],
                "statistics": [
                    889798815,
                    0,
                    0,
                    0,
                    3819171,
                    61106736,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": null,
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 0,
                "name": "Sort",
                "parent_id": null,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "cntrycode",
                "labels": [],
                "statistics": [
                    162132,
                    0,
                    0,
                    0,
                    7,
                    257,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": null,
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 13,
                "name": "AggregateFinal",
                "parent_id": 12,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "sum(c_acctbal), count(c_acctbal)",
                "labels": [
                    {
                        "name": "Aggregate Functions",
                        "value": [
                            "sum(c_acctbal)",
                            "count(c_acctbal)"
                        ]
                    }
                ],
                "statistics": [
                    108056,
                    0,
                    0,
                    0,
                    1,
                    25,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": null,
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 10,
                "name": "Filter",
                "parent_id": 8,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "contains(['13', '31', '23', '29', '30', '18', '17'], substr(customer.c_phone (#4), 1, 2))",
                "labels": [
                    {
                        "name": "Filter condition",
                        "value": [
                            "contains(['13', '31', '23', '29', '30', '18', '17'], substr(customer.c_phone (#4), 1, 2))"
                        ]
                    }
                ],
                "statistics": [
                    918363174,
                    0,
                    0,
                    0,
                    4201380,
                    214270380,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": null,
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 4,
                "name": "EvalScalar",
                "parent_id": 2,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "substr(customer.c_phone (#4), 1, 2)",
                "labels": [
                    {
                        "name": "List of Expressions",
                        "value": [
                            "substr(customer.c_phone (#4), 1, 2)"
                        ]
                    }
                ],
                "statistics": [
                    18731081,
                    0,
                    0,
                    0,
                    636749,
                    17828972,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": null,
                "errors": []
            }
        ],
        "statistics_desc": {
            "CpuTime": {
                "desc": "The time spent to process in nanoseconds",
                "display_name": "cpu time",
                "index": 0,
                "plain_statistics": false,
                "unit": "NanoSeconds"
            },
            "ExchangeBytes": {
                "desc": "The number of data bytes exchange between nodes in cluster mode",
                "display_name": "exchange bytes",
                "index": 3,
                "plain_statistics": true,
                "unit": "Bytes"
            },
            "ExchangeRows": {
                "desc": "The number of data rows exchange between nodes in cluster mode",
                "display_name": "exchange rows",
                "index": 2,
                "plain_statistics": true,
                "unit": "Rows"
            },
            "ExternalServerRequestCount": {
                "desc": "The count of external server request times",
                "display_name": "external server request count",
                "index": 24,
                "plain_statistics": true,
                "unit": "Count"
            },
            "ExternalServerRetryCount": {
                "desc": "The count of external server retry times",
                "display_name": "external server retry count",
                "index": 23,
                "plain_statistics": true,
                "unit": "Count"
            },
            "LocalSpillReadBytes": {
                "desc": "The bytes local spilled by read",
                "display_name": "bytes local spilled by read",
                "index": 19,
                "plain_statistics": true,
                "unit": "Bytes"
            },
            "LocalSpillReadCount": {
                "desc": "The number of local spilled by read",
                "display_name": "numbers local spilled by read",
                "index": 18,
                "plain_statistics": true,
                "unit": "Count"
            },
            "LocalSpillReadTime": {
                "desc": "The time spent to read local spill in millisecond",
                "display_name": "local spilled time by read",
                "index": 20,
                "plain_statistics": false,
                "unit": "MillisSeconds"
            },
            "LocalSpillWriteBytes": {
                "desc": "The bytes local spilled by write",
                "display_name": "bytes local spilled by write",
                "index": 16,
                "plain_statistics": true,
                "unit": "Bytes"
            },
            "LocalSpillWriteCount": {
                "desc": "The number of local spilled by write",
                "display_name": "numbers local spilled by write",
                "index": 15,
                "plain_statistics": true,
                "unit": "Count"
            },
            "LocalSpillWriteTime": {
                "desc": "The time spent to write local spill in millisecond",
                "display_name": "local spilled time by write",
                "index": 17,
                "plain_statistics": false,
                "unit": "MillisSeconds"
            },
            "MemoryUsage": {
                "desc": "The real time memory usage",
                "display_name": "memory usage",
                "index": 22,
                "plain_statistics": false,
                "unit": "Bytes"
            },
            "OutputBytes": {
                "desc": "The number of bytes from the physical plan output to the next physical plan",
                "display_name": "output bytes",
                "index": 5,
                "plain_statistics": true,
                "unit": "Bytes"
            },
            "OutputRows": {
                "desc": "The number of rows from the physical plan output to the next physical plan",
                "display_name": "output rows",
                "index": 4,
                "plain_statistics": true,
                "unit": "Rows"
            },
            "RemoteSpillReadBytes": {
                "desc": "The bytes remote spilled by read",
                "display_name": "bytes remote spilled by read",
                "index": 13,
                "plain_statistics": true,
                "unit": "Bytes"
            },
            "RemoteSpillReadCount": {
                "desc": "The number of remote spilled by read",
                "display_name": "numbers remote spilled by read",
                "index": 12,
                "plain_statistics": true,
                "unit": "Count"
            },
            "RemoteSpillReadTime": {
                "desc": "The time spent to read remote spill in millisecond",
                "display_name": "remote spilled time by read",
                "index": 14,
                "plain_statistics": false,
                "unit": "MillisSeconds"
            },
            "RemoteSpillWriteBytes": {
                "desc": "The bytes remote spilled by write",
                "display_name": "bytes remote spilled by write",
                "index": 10,
                "plain_statistics": true,
                "unit": "Bytes"
            },
            "RemoteSpillWriteCount": {
                "desc": "The number of remote spilled by write",
                "display_name": "numbers remote spilled by write",
                "index": 9,
                "plain_statistics": true,
                "unit": "Count"
            },
            "RemoteSpillWriteTime": {
                "desc": "The time spent to write remote spill in millisecond",
                "display_name": "remote spilled time by write",
                "index": 11,
                "plain_statistics": false,
                "unit": "MillisSeconds"
            },
            "RuntimeFilterPruneParts": {
                "desc": "The partitions pruned by runtime filter",
                "display_name": "parts pruned by runtime filter",
                "index": 21,
                "plain_statistics": true,
                "unit": "Count"
            },
            "ScanBytes": {
                "desc": "The bytes scanned of query",
                "display_name": "bytes scanned",
                "index": 6,
                "plain_statistics": true,
                "unit": "Bytes"
            },
            "ScanCacheBytes": {
                "desc": "The bytes scanned from cache of query",
                "display_name": "bytes scanned from cache",
                "index": 7,
                "plain_statistics": true,
                "unit": "Bytes"
            },
            "ScanPartitions": {
                "desc": "The partitions scanned of query",
                "display_name": "partitions scanned",
                "index": 8,
                "plain_statistics": true,
                "unit": "Count"
            },
            "WaitTime": {
                "desc": "The time spent to wait in nanoseconds, usually used to measure the time spent on waiting for I/O",
                "display_name": "wait time",
                "index": 1,
                "plain_statistics": false,
                "unit": "NanoSeconds"
            }
        }
    }`},61712:function(zn,X,o){o.r(X),o.d(X,{DatabendJson:function(){return Ce},QueryProfile:function(){return je},TestProfile:function(){return fs}});var yn=o(97857),i=o.n(yn),Kn=o(5574),q=o.n(Kn),W=o(92652),F=o(90512),w=o(67294),Dn=o(92077),Xn=o.n(Dn),cn=o(79830),Y=o(47539),nn=o(29879),en=o.n(nn),B=o(27885);function gn(c){var n;return c<=999?c:(n=Xn()(c).format("0.0a"))===null||n===void 0?void 0:n.toUpperCase()}function j(c){var n=document.createElement("div");n.style.position="absolute",n.style.whiteSpace="nowrap",n.style.fontSize="12px",n.style.visibility="hidden",n.textContent=c,document.body.appendChild(n);var t=n.offsetWidth;return document.body.removeChild(n),t}var re=function(n){return(0,cn.format)(n,{thousandsSeparator:","})},In=function(n){return n!==void 0?(0,Y.Z)(Number(n)||0):"0ms"},Vn=function(n){return en()(n||0)},As=function(n){if(n<=60)return n.toFixed(0)+"s";var t=Math.floor(n/60),s=n-t*60;return t+"m"+(s>=1?s.toFixed(0)+"s":"")};function Rn(c,n){return n<=0?"0%":(c/n*100).toFixed(1)+"%"}function Ge(c){try{return JSON.parse(c),!0}catch(n){return!1}}function Je(c){var n=B.iv(c),t=btoa(String.fromCharCode.apply(null,n)),s=t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");return s}function Ke(c){for(var n,t,s=(n=c==null||(t=c.replace(/-/g,"+"))===null||t===void 0?void 0:t.replace(/_/g,"/"))!==null&&n!==void 0?n:"",a=atob(s),u=new Uint8Array(a.length),_=0;_<a.length;_++)u[_]=a.charCodeAt(_);var d=B.ec(u,{to:"string"});return d}function Xe(c){var n=window.location.search.match(new RegExp("[?&]".concat(c,"=([^&]*)")));return n?decodeURIComponent(n[1]):null}var Qn=o(96363),Yn=o(28520),tn=o(29462),an=o(78957),e=o(85893),Ve=function(n){var t=n.position,s=n.title;return(0,e.jsx)("div",{style:{left:t.x+"px",top:t.y+"px"},className:(0,F.Z)("databend-self-tooltip"),children:s})},Qe=Ve,Ye=o(13769),Un=o.n(Ye),nt=o(50888),et=o(74330),tt=["className","children"],st=(0,e.jsx)(nt.Z,{style:{fontSize:24},spin:!0}),at=function(n){var t=n.className,s=n.children,a=Un()(n,tt);return(0,e.jsx)(et.Z,i()(i()({style:{zIndex:2e3},className:t},a),{},{indicator:st,children:s}))},_e=at,ot=function(n){var t=n.onButtonClick,s=n.title,a=n.subTitle,u=n.buttonText,_=n.buttonArea,d=n.loading,b=d===void 0?!1:d,f=n.width,S=f===void 0?"360px":f,R=n.paddingTop,y=R===void 0?"66px":R,U=n.TopIcon,P=a||"There is no related resource, you can try to refresh or create a new resource";return(0,e.jsx)(_e,{spinning:b,children:(0,e.jsx)("div",{className:"profile-no-result-with-action",style:{paddingTop:y},children:(0,e.jsx)("div",{style:{width:S},className:"profile-no-result-with-action-wrap",children:(0,e.jsxs)(an.Z,{direction:"vertical",className:"profile-no-result-with-action-content",size:12,children:[U&&(0,e.jsx)(tn.ZP,{className:"pointer-events-none",icon:U}),(0,e.jsx)("div",{className:"profile-no-result-with-action-title",children:s}),a!==null&&(0,e.jsx)("div",{className:"profile-no-result-with-action-sub-title",children:P}),_?(0,e.jsx)(e.Fragment,{children:_}):(0,e.jsx)(e.Fragment,{children:u&&(0,e.jsx)(tn.ZP,{onClick:function(N){return t&&t(N)},type:"primary",children:u})})]})})})})},lt=(0,w.memo)(ot),ct=function(n){var t=n.data,s=(0,w.useState)(""),a=q()(s,2),u=a[0],_=a[1];return(0,w.useEffect)(function(){if(t!=null&&t.length){var d="linear-gradient(90deg",b=0;t.forEach(function(f){d+=", ".concat(f.color," ").concat(b,"%"),b+=f.percent,d+=", ".concat(f.color," ").concat(b,"%")}),d+=")",_(d)}},[t]),(0,e.jsx)(e.Fragment,{children:u&&(0,e.jsx)("div",{style:{height:"8px",borderRadius:"4px",backgroundImage:u}})})},ut=(0,w.memo)(ct),rt=o(44107),_t={errorTip:"kCjZdetPcq0VpgDgIYRf"},dt=o(42481),it=o(56986),ht=o(20640),de=o.n(ht),mt=function(n){var t=n.containerRef,s=n.className,a=n.copyText,u="Copy",_="Copied",d=(0,w.useState)(u),b=q()(d,2),f=b[0],S=b[1],R=function(){if(S(_),a)de()(a);else if(t){var U;de()(t==null||(U=t.current)===null||U===void 0?void 0:U.innerText)}};return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(tn.ZP,{onMouseLeave:function(){return S(u)},onClick:function(){return R()},className:(0,F.Z)(s),type:"primary",children:f})})},pt=(0,w.memo)(mt),ie=function(n){var t=n.content,s=n.buttonText,a=n.isString,u=n.height,_=n.copyText,d=n.CustomArea,b=n.isBreakLine,f=(0,w.useRef)(null),S=a?t:JSON.stringify(JSON.parse(t),null,2);return(0,e.jsxs)("div",{style:{height:u+"px"},className:"db-code-content-container",children:[s&&(0,e.jsx)(tn.ZP,{className:"db-code-content-button-text",style:{top:0,left:"20px",borderTopLeftRadius:0,borderTopRightRadius:0},type:"primary",children:s}),(0,e.jsx)("div",{className:"db-code-content-copy",children:(0,e.jsxs)(an.Z,{children:[d&&d,(0,e.jsx)(pt,{className:"db-code-content--button",copyText:_||t,containerRef:f})]})}),(0,e.jsx)("div",{className:(0,F.Z)("db-code-content-block",b&&"db-code-content-break-line"),style:{fontWeight:500,whiteSpace:"pre-wrap"},ref:f,children:(0,e.jsx)(dt.Z,{style:it.Z,children:S})})]})};ie.defaultProps={buttonText:"Meta data",isString:!0,height:"auto",isBreakLine:!1};var ft=ie,vt=["content","children","buttonText"],he=function(n){var t=n.content,s=n.children,a=n.buttonText,u=Un()(n,vt);return(0,e.jsx)(Yn.Z,i()(i()({overlayClassName:_t.errorTip,overlayInnerStyle:{padding:0},title:(0,e.jsx)(ft,{buttonText:a,content:t||""})},u),{},{children:s}))};he.defaultProps={buttonText:"Failed Text"};var me=he,bt=function(n){var t=n.icon,s=t===void 0?"databend-icon-xihuan_like":t,a=n.className,u=n.onClick,_=n.style,d=n.size,b=d===void 0?18:d;return(0,e.jsx)("span",{className:"g-box-c",children:(0,e.jsx)("i",{onClick:function(S){return u&&u(S)},className:(0,F.Z)("databend-icon-v2",s,a),style:i()(i()({},_),{},{fontSize:b+"px"})})})},on=bt,yt=o(81763),pe=o(18587);function fe(){var c=null;(0,yt.Z)(function(){c&&c()});function n(s){var a,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"body";c=(0,pe.ak)((a=document)===null||a===void 0?void 0:a.querySelector(u),function(){s.resize({animation:{duration:300,easing:"cubicInOut"}})})}function t(s){var a,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"body";c=(0,pe.ak)((a=document)===null||a===void 0?void 0:a.querySelector(u),function(){s()})}return{reshape:n,reshapeDOM:t}}var gt=function(n){var t=n.text,s=t===void 0?"0":t,a=n.roundColor,u=a===void 0?"#1C82F2":a,_=n.width,d=_===void 0?12:_,b=n.className,f=n.textClass,S=n.gap,R=S===void 0?8:S,y=n.wrapClass,U=y===void 0?"db-simple-legend-default":y,P=n.isInnerHtml,sn=P===void 0?!1:P;return(0,e.jsxs)("span",{className:U,style:{gap:R+"px"},children:[(0,e.jsx)("span",{style:{backgroundColor:u,width:d+"px",height:d+"px",borderRadius:"50%",minWidth:"1px"},className:(0,F.Z)("db-simple-inline-block",b)}),s!==void 0&&s!==""&&(0,e.jsx)(e.Fragment,{children:sn?(0,e.jsx)("span",{style:{flex:1},className:(0,F.Z)("db-simple-legend-text",f),dangerouslySetInnerHTML:{__html:s}}):(0,e.jsx)("span",{style:{flex:1},className:(0,F.Z)("db-simple-legend-text",f),children:s})})]})},ve=gt,xt=o(19632),kn=o.n(xt),Ct=o(95271),wt=o(35322),be="OutputRows";function ye(c,n,t,s,a){return[["M",c+a,n],["l",t-a*2,0],["a",a,a,0,0,1,a,a],["l",0,s-a*2],["a",a,a,0,0,1,-a,a],["l",-t+a*2,0],["a",a,a,0,0,1,-a,-a],["l",0,-s+a*2],["a",a,a,0,0,1,a,-a],["Z"]]}var Tt=[["M",19.0374+2,60],["H",15],["C",10.7909+2,60,11,5.79086+56,11,64],["C",11,10.2091+56,10.7909+2,68,15,68],["H",19.1059+2],["C",17.8458+2,13.9437+56,15.7082+2,15.2309+56,13.2964+2,15.0062+56],["C",2.5+2,70,1,13.5+56,4,7.5+56],["C",-2.5+2,1.00616+56,9.5+2,.5+56,13.2964+2,1.00616+56],["C",15.6724+2,1.00616+56,17.772+2,2.18999+56,19.0374+2,60],["Z"]],St=[["M",125.5,-18],["L",131.9952,-6.75],["L",119.00481,-6.75],["L",125.5,-18],["Z"],["M",125.5,-1],["L",125.5,-7]];function Rt(c){if((c==null?void 0:c.length)<=2)return c;var n=1,t=4.5,s=c.map(function(d){return d._value}).filter(function(d){return d!==void 0}),a=Math.min.apply(Math,kn()(s)),u=Math.max.apply(Math,kn()(s)),_=function(b,f,S,R,y){var U=(b-f)/(S-f);return R+(y-R)*U};return c.forEach(function(d){d._value!==void 0?d.lineWidth=_(d._value,a,u,n,t):d.lineWidth=n}),c}function Ut(c){var n=-1;c.sort(function(s,a){return Number(s==null?void 0:s.id)-Number(a==null?void 0:a.id)});var t=c==null?void 0:c.map(function(s){var a=s.title,u=s.name,_=s.id,d=s.statisticsDescArray;n===-1&&(n=(d==null?void 0:d.findIndex(function(f){return f._type===be}))||0);var b=d[n]._value;return i()(i()({},s),{},{id:_,outputRows:b,value:{title:((u==null?void 0:u.length)>=26?(u==null?void 0:u.slice(0,26))+"...":u||"  ")+" [".concat(_,"]"),items:[{text:a||"  "}]}})});return t}function kt(c){var n=-1;return c.sort(function(t,s){return Number(t==null?void 0:t.id)-Number(s==null?void 0:s.id)}),c==null?void 0:c.map(function(t){var s=t==null?void 0:t.statisticsDescArray;n===-1&&(n=(s==null?void 0:s.findIndex(function(_){return _._type===be}))||0);var a=s[n]._value,u={source:t==null?void 0:t.parent_id,target:t==null?void 0:t.id};return a<=0?u:i()(i()({},u),{},{value:gn(a),_value:a})})}var qt=function(n){var t=n.plainData,s=n.graphSize,a=n.graphSizeHeight,u=n.graphRef,_=n.isLight,d=n.overviewInfoCurrent,b=n.onReady,f=n.queryId,S=f===void 0?"analysis":f,R=n.onShare,y=R===void 0?void 0:R,U=function(){var T=u==null?void 0:u.current;T&&(T.fitView(),T.refresh())},P=Rt(kt(t)),sn={nodes:Ut(t),edges:P},N={width:s,height:a},V=i()(i()({},N),{},{autoFit:!1,onReady:b,data:sn,layout:{rankdir:"TB",ranksepFunc:function(){return 20},sortBy:"id"},tooltipCfg:{show:!1},toolbarCfg:{show:!0,customContent:function(T){var C=T.zoomIn,h=T.zoomOut;return(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"g-cursor g-box-c",onClick:function(){return U()},children:(0,e.jsx)(on,{size:16,icon:"databend-icon-quanping1"})}),(0,e.jsx)("span",{className:"g-cursor g-box-c",onClick:h,children:(0,e.jsx)(on,{size:16,icon:"databend-icon-minus-bold"})}),(0,e.jsx)("span",{className:"g-cursor g-box-c",onClick:C,children:(0,e.jsx)(on,{size:16,icon:"databend-icon-jia"})}),(0,e.jsx)("span",{className:"g-cursor g-box-c",onClick:function(){var G;return u==null||(G=u.current)===null||G===void 0?void 0:G.downloadFullImage("databend-profile-".concat(S),"image/png")},children:(0,e.jsx)(on,{size:16,icon:"databend-icon-xiazai_download-four"})}),y&&(0,e.jsx)("span",{className:"g-cursor g-box-c",onClick:function(){y==null||y()},children:(0,e.jsx)(on,{size:16,icon:"databend-icon-fenxiang_share-one"})})]})}},nodeCfg:{padding:10,size:[250,40],title:{autoEllipsis:!0,containerStyle:{fill:"transparent"},style:function(T){var C;return{fontWeight:600,fill:T!=null&&(C=T.errors)!==null&&C!==void 0&&C.length?"#fff":_?"#000":"#fff"}}},anchorPoints:[[.5,0],[.5,1]],style:function(T){var C;return{radius:5,fill:T!=null&&(C=T.errors)!==null&&C!==void 0&&C.length?"#f73920":_?"#fff":"#101",stroke:_?"#ccc":"#fff",filter:_?"drop-shadow(2px 2px 2px rgba(204, 204, 204, .3))":"drop-shadow(2px 3px 2px rgba(255, 255, 255, .2))"}},nodeStateStyles:{highlight:{stroke:"#2c91ff",lineWidth:2},hover:{stroke:"#2c91ff",lineWidth:2}},customContent:function(T,C,h){var $,G,L,E,K,Q,M=h.startX,O=h.startY,xn=h.width,dn=T.text;dn=($=dn)===null||$===void 0?void 0:$.replace(/\n/g," ");var qn=230,Wn=(G=dn)===null||G===void 0?void 0:G.length,J=C==null||(L=C.cfg)===null||L===void 0||(L=L.item)===null||L===void 0||(L=L._cfg)===null||L===void 0?void 0:L.model,jn=(J==null?void 0:J.totalTime)/(((E=d.current)===null||E===void 0?void 0:E.totalTime)||1),Cn=J==null||(K=J.errors)===null||K===void 0?void 0:K.length,ee=J==null?void 0:J.parent_id,hn=C.addShape("text",{attrs:{textBaseline:"top",x:M,y:O,text:dn,fill:Cn?"rgba(255,255,255,0.8)":"#75767a",textAlign:"left"},name:"text-".concat(Math.random())}),On=hn.getBBox().width;if(Wn>26&&On>xn){var Nn,Bn=((Nn=dn)===null||Nn===void 0?void 0:Nn.slice(0,Math.floor(xn/On*Wn-3)))+"...";hn.attr("text",Bn)}var Hn=(Q=hn==null?void 0:hn.getBBox().height)!==null&&Q!==void 0?Q:0,wn=8,mn=4,ln=jn*qn,te=ye(M,O+Hn+10,qn,wn,mn);C.addShape("path",{attrs:{path:te,fill:"#f2f2f2"},name:"progress-bg-".concat(Math.random())});var Zn=ye(M,O+Hn+10,ln,wn,mn);if(C.addShape("path",{attrs:{path:Zn,fill:ln<=0?"rgba(0,0,0,0)":"rgb(1, 117, 246)"},name:"progress-fg-".concat(Math.random())}),ln>0&&ln<9&&C.addShape("path",{attrs:{path:Tt,fill:Cn?"#f73920":_?"#fff":"#101"},name:"circle-path-bg-".concat(Math.random())}),ee==="null"){var An=P==null?void 0:P.find(function(En){return(En==null?void 0:En.source)==="null"});C.addShape("path",{attrs:{path:St,fill:"#ccc",stroke:"#ccc",lineWidth:(An==null?void 0:An.lineWidth)||1},name:"percentage-output-text-".concat(Math.random())});var Fn=gn(J==null?void 0:J.outputRows);C.addShape("text",{attrs:{textBaseline:"top",x:125+j(Fn)/2,y:-30,text:Fn,fill:_?"rgba(12, 22, 43, 0.6)":"#fff",fontWeight:"bold",fontSize:12,textAlign:"right"},name:"percentage-output-text"})}var se=jn>0?"".concat((jn*100).toFixed(1),"%"):"0%";return C.addShape("text",{attrs:{textBaseline:"top",x:M+xn,y:O-27,text:se,fill:Cn?"#fff":_?"#000":"#fff",fontSize:11,textAlign:"right"},name:"percentage-text-".concat(Math.random())}),Math.max(Hn,wn)}},edgeCfg:{type:"cubic-vertical",endArrow:!1,style:function(T){var C=(T==null?void 0:T.lineWidth)||1;return{lineWidth:C}},label:{style:{fontWeight:600,fill:_?"rgba(12, 22, 43, 0.6)":"#fff"}},startArrow:{type:"triangle"}},graphCfg:{containerStyle:{backgroundColor:"#f0f0f0"}},markerCfg:function(T){var C;return{animate:!0,position:"bottom",show:(C=sn.edges.filter(function(h){return h.source===T.id}))===null||C===void 0?void 0:C.length}},behaviors:["drag-canvas",{type:"zoom-canvas",sensitivity:.4}]});return(0,e.jsx)(Ct.Z,i()({},V))},jt=(0,w.memo)(qt,function(c,n){var t=(0,wt.Z)(c.plainData,n.plainData),s=c.graphSize===n.graphSize,a=c.graphSizeHeight===n.graphSizeHeight,u=c.isLight===n.isLight;return t&&s&&a&&u}),Nt=o(9783),ge=o.n(Nt),Ht=o(25968),At=o(6226),Et=o(25944),Pt=o(7660),Lt=o(47221),Mt=["children"],zt=function(n){var t=n.children,s=Un()(n,Mt);return(0,e.jsx)(tn.ZP,i()(i()({},s),{},{className:(0,F.Z)(s.className,"db-reset-white-button"),style:i()({gap:"6px"},s==null?void 0:s.style),children:t}))},Dt=zt,It=["padding","borderRadius","children","className","isNeedBorder","isJader","onClick","height"],xe=function(n){var t=n.padding,s=n.borderRadius,a=n.children,u=n.className,_=n.isNeedBorder,d=n.isJader,b=n.onClick,f=n.height,S=Un()(n,It),R=t===void 0?[20,20,20,20]:t,y=Array.isArray(R);return(0,e.jsx)("div",i()(i()({onClick:b,className:(0,F.Z)("db-card-wrap-out",u,_&&"db-card-wrap-border",d&&"db-card-wrap-jader"),style:i()(i()({},y?{paddingTop:R[0]+"px",paddingRight:R[1]+"px",paddingBottom:R[2]+"px",paddingLeft:R[3]+"px"}:{padding:t+"px"}),{},{height:f==="auto"?"auto":f+"px",borderRadius:"".concat(s,"px")})},S),{},{children:a}))};xe.defaultProps={padding:[20,20,20,20],borderRadius:6,isNeedBorder:!0,height:"auto",isJader:!1};var Wt=xe,Ot=o(49677),Bt=o.n(Ot),Zt=o(55171),Ft=o.n(Zt),$t=function(n){var t=Object.assign({},(Bt()(n),n));return(0,e.jsx)(Ft(),i()(i()({style:{padding:"10px",borderRadius:"4px"},displayDataTypes:!1,theme:"ashes"},t),{},{src:(t==null?void 0:t.src)||{}}))},Ce=$t,we=o(78234),Te=o(64665),Se=o(97369),Gt=o(49956),Jt=o(47008),Kt=o(78537),Re=o(27067),Xt=o(31825),Ue=o(35183),Vt=o(11415),ke=o(79016),qe=o(6228);Ue.D([Gt.N,Jt.N,Kt.N,Re.N,Xt.N,Te.N,Se.N,qe.N,ke.z]),Ue.D([Re.N,Te.N,Se.N,qe.N,ke.z]);var Qt=function(n){var t=n.series,s=n.legendData,a=n.xData,u=n.isLight,_=(0,w.useRef)(null),d=fe(),b=d.reshape,f=u?"rgba(1, 14, 41, 0.08)":"rgba(255, 255, 255, 0.08)",S=u?"rgba(12, 22, 43, 0.6)":"rgba(249, 249, 249, 0.6)";return(0,we.Z)(function(){var R=Vt.S1(_.current),y={tooltip:{trigger:"axis"},legend:{type:"scroll",data:s},grid:{left:"13%",right:"9%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:a,axisLine:{lineStyle:{color:f}},axisLabel:{showMinLabel:!0,showMaxLabel:!0,color:S,margin:8},axisTick:{show:!1}},yAxis:{offset:30,type:"value"},series:t};R.setOption(y),b(R,"body")}),(0,e.jsx)("div",{style:{height:"280px",width:"100%",minWidth:"500px"},ref:_})},Yt=(0,w.memo)(Qt),ns=["isLight","metricsData","drawerWidth"];function ne(c){var n,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return c?(n=Object.values(c))===null||n===void 0?void 0:n.sort(function(s,a){return s==null?void 0:s.localeCompare(a)}).join(" "):t||"No labels"}function es(c){return c.map(function(n){var t=Object.keys(n.value)[0],s=t==="Histogram",a=t==="Summary",u=s||a;if(!n.labels&&!u)return{name:n.name,columns:[{title:t,key:t,dataIndex:t}],data:[ge()({},t,n.value[t])],labels:n.labels?n.labels:null,value:n.value};if(u){var _=s?n.value.Histogram:n.value.Summary,d=[],b=[];return d=_.map(function(y){return s?y.less_than:y.quantile}),b=_.map(function(y){return y.count}),{isChart:!0,name:n.name,_tag:ne(n.labels,n.name),columns:d,data:[b],labels:n.labels,value:n.value,type:t}}var f=Object.keys(n.labels),S=f.map(function(y){return{title:y,key:y,dataIndex:y}}).concat({title:t,key:t,dataIndex:t}),R=[i()(i()({},n.labels),{},ge()({},t,n.value[t]))];return{name:n.name,columns:S,data:R,labels:n.labels,value:n.value}})}function ts(c){var n={};return c.forEach(function(t){if(!n[t.name])n[t.name]=i()(i()({},t),{},{labelsArr:[i()(i()({},t.labels),{},{_tag:ne(t.labels,t.name)})]}),delete n[t.name].labels;else if(t!=null&&t.type)n[t.name].data=[].concat(kn()(n[t.name].data),kn()(t.data)),n[t.name].labelsArr.push(i()(i()({},t.labels),{},{_tag:ne(t.labels,t.name)}));else{var s;(s=n[t.name].data).push.apply(s,kn()(t.data))}}),Object.values(n)}function ss(c){return c==null?void 0:c.map(function(n){return{machine:n[0],data:ts(es(n[1]).sort(function(t,s){if((t==null?void 0:t.name)===(s==null?void 0:s.name)){var a;return s==null||(a=s._tag)===null||a===void 0?void 0:a.localeCompare(t==null?void 0:t._tag)}return 0}).sort(function(t,s){return!(t!=null&&t.type)&&!(s!=null&&s.type)?0:t!=null&&t.type?s!=null&&s.type?t.type.localeCompare(s==null?void 0:s.type):1:-1}))}})}var as=function(n){var t=n.isLight,s=n.metricsData,a=n.drawerWidth,u=a===void 0?"100vw":a,_=Un()(n,ns),d=(0,w.useState)(!1),b=q()(d,2),f=b[0],S=b[1],R=(0,w.useState)([]),y=q()(R,2),U=y[0],P=y[1];(0,w.useEffect)(function(){if(s){var N=Object.entries(s),V=ss(N);P(V)}},[s]);var sn=U==null?void 0:U.map(function(N,V){var Z,T=N==null||(Z=N.data)===null||Z===void 0?void 0:Z.length,C=T%2!==0;return{key:V.toString(),label:(0,e.jsxs)("div",{className:"profile-metrics-header",children:["Machine ",V+1,":",N==null?void 0:N.machine]}),children:(0,e.jsx)(Ht.Z,{gutter:[16,16],className:"profile-metrics-row",children:N==null?void 0:N.data.map(function(h,$){var G,L;return(0,w.createElement)(At.Z,{xl:12,xxl:12,lg:24,md:24,sm:24,xs:24,className:"profile-metrics-col",span:C&&T-1===$?24:12,key:"".concat(V,"_").concat(h==null?void 0:h.name,"_").concat($)},(0,e.jsx)("div",{className:"profile-metrics-name",children:h==null?void 0:h.name}),h!=null&&h.data?(0,e.jsx)(e.Fragment,{children:h!=null&&h.type?(0,e.jsx)(Yt,{isLight:t,series:h==null||(G=h.data)===null||G===void 0?void 0:G.map(function(E,K){var Q;return{type:"bar",data:E,name:h==null||(Q=h.labelsArr[K])===null||Q===void 0?void 0:Q._tag}}),legendData:h==null||(L=h.labelsArr)===null||L===void 0?void 0:L.map(function(E){return E==null?void 0:E._tag}),xData:h==null?void 0:h.columns}):(0,e.jsx)(Et.Z,{rowKey:function(K){return(K==null?void 0:K.key)||"row-key-"+Math.random()},className:"profile-metrics-table",pagination:!1,dataSource:h==null?void 0:h.data,columns:h==null?void 0:h.columns})}):(0,e.jsx)(Wt,{children:JSON.stringify(h==null?void 0:h.value)}))})})}});return(0,e.jsx)(Pt.Z,i()(i()({destroyOnClose:!0,width:u},_),{},{title:(0,e.jsxs)(an.Z,{children:[(0,e.jsx)("span",{children:_==null?void 0:_.title}),(0,e.jsx)(Dt,{onClick:function(){return S(!f)},children:(0,e.jsxs)(an.Z,{size:4,children:[(0,e.jsx)(on,{size:14,icon:"databend-icon-qiehuan_switch"}),f?"Chart View":"Metrics JSON"]})})]}),children:(0,e.jsx)(e.Fragment,{children:f?(0,e.jsx)(Ce,{src:s}):(0,e.jsx)(Lt.Z,{className:"profile-metrics-collapseWrap",expandIconPosition:"start",defaultActiveKey:Array.from({length:(U==null?void 0:U.length)+1},function(N,V){return V.toString()}),items:sn})})}))},os=as,ls="CpuTime",cs="WaitTime";function us(c){return c==null?void 0:c.map(function(n){var t,s,a,u=Object.keys(n)[0];return{_errorType:u,message:((t=n[u])===null||t===void 0?void 0:t.message)||"",detail:((s=n[u])===null||s===void 0?void 0:s.detail)||"",backtrace:((a=n[u])===null||a===void 0||(a=a.backtrace)===null||a===void 0||(a=a.build_id)===null||a===void 0?void 0:a.join(","))||""}})}function rs(c,n){return c==="Bytes"?re(n):c==="Rows"||c==="Count"?Vn(n):c==="MillisSeconds"?In(n):c==="NanoSeconds"?In(n/1e6):n}var _s=function(n){var t,s,a,u,_=n.profileRef,d=n.queryDuration,b=n.queryId,f=b===void 0?"analysis":b,S=n.outValue,R=n.countShow,y=n.offsetWidth,U=y===void 0?400:y,P=n.offsetHeight,sn=P===void 0?150:P,N=n.showTextArea,V=N===void 0?!0:N,Z=n.initLoading,T=Z===void 0?!1:Z,C=n.isNeedMetrics,h=C===void 0?!1:C,$=n.isDemo,G=$===void 0?!1:$,L=n.isLight,E=L===void 0?!0:L,K=n.getActiveName,Q=K===void 0?null:K,M=n.getOverviewInfo,O=M===void 0?null:M,xn=n.ErrorTicketDom,dn=xn===void 0?(0,e.jsx)(e.Fragment,{}):xn,qn=n.isAdmin,Wn=qn===void 0?!1:qn,J=n.onShare,jn=J===void 0?void 0:J,Cn=n.responseDom,ee=Cn===void 0?"body":Cn,hn=n.drawerWidth,On=hn===void 0?"100vw":hn,Nn=(0,W.Z)(0),Bn=q()(Nn,2),Hn=Bn[0],wn=Bn[1],mn=(0,w.useRef)(null),ln=(0,w.useRef)(null),te=(0,W.Z)(window.innerHeight-150),Zn=q()(te,2),An=Zn[0],Fn=Zn[1],se=fe(),En=se.reshapeDOM,bn=(0,w.useRef)(void 0),vs=(0,W.Z)([]),Ne=q()(vs,2),D=Ne[0],bs=Ne[1],pn=(0,w.useRef)(void 0),ys=(0,W.Z)(!0),He=q()(ys,2),Ae=He[0],ae=He[1],gs=(0,W.Z)(""),Ee=q()(gs,2),$n=Ee[0],Pe=Ee[1],xs=(0,W.Z)([]),Le=q()(xs,2),un=Le[0],Cs=Le[1],ws=(0,W.Z)([]),Me=q()(ws,2),Tn=Me[0],Ts=Me[1],Ss=(0,W.Z)(!1),ze=q()(Ss,2),Rs=ze[0],De=ze[1],Us=(0,W.Z)({clientX:0,clientY:0,show:!1,text:""}),Ie=q()(Us,2),fn=Ie[0],oe=Ie[1],ks=(0,W.Z)({cpuTime:0,waitTime:0,isTotalBigerZero:!1,totalTime:0,totalTimePercent:"0%",labels:void 0,statisticsDescArray:[],metrics:null}),We=q()(ks,2),r=We[0],le=We[1];function qs(l){var g,x,p,v=l==null?void 0:l.profiles,H=l==null?void 0:l.statistics_desc,k=(g=H[ls])===null||g===void 0?void 0:g.index,A=(x=H[cs])===null||x===void 0?void 0:x.index,I=0,rn=0,Pn=[];v==null||v.forEach(function(m){m.id=String(m.id),m.parent_id=String(m.parent_id);var _n=m==null?void 0:m.errors,ce=m==null?void 0:m.statistics[k],ue=m==null?void 0:m.statistics[A];m.totalTime=ce+ue,m.cpuTime=ce,m.waitTime=ue,I+=ce,rn+=ue,m.errors=(_n==null?void 0:_n.length)>0?us(m==null?void 0:m.errors):[],m.statisticsDescArray=Object.entries(H).map(function(Ns){var $e=q()(Ns,2),Hs=$e[0],z=$e[1];return{_type:Hs,desc:z==null?void 0:z.desc,display_name:(z==null?void 0:z.display_name)||(z==null?void 0:z.displayName),index:z==null?void 0:z.index,unit:z.unit,plain_statistics:z==null?void 0:z.plain_statistics,_value:m.statistics[z==null?void 0:z.index]}})});var vn=I+rn;v==null||v.forEach(function(m){m.totalTimePercent=Rn(m==null?void 0:m.totalTime,vn),m.cpuTimePercent=Rn(m==null?void 0:m.cpuTime,m.totalTime),m.waitTimePercent=Rn(m==null?void 0:m.waitTime,m.totalTime)}),bs(v),Cs((p=(0,rt.Z)(v))===null||p===void 0||(p=p.filter(function(m){return parseFloat(m.totalTimePercent)>.09}))===null||p===void 0?void 0:p.sort(function(m,_n){return _n.totalTime-m.totalTime}));var Ln=Rn(I,vn),Sn=Rn(rn,vn),Mn={cpuTime:I,waitTime:rn,totalTime:vn,totalTimePercent:"100%",cpuTimePercent:Ln,waitTimePercent:Sn,statisticsDescArray:Pn,isNode:!1,errors:[]};pn.current=Mn,le(Mn),O==null||O(Mn)}function js(){var l=bn==null?void 0:bn.current;l&&(l==null||l.fitView())}var Gn=function(){_&&wn(G?700:(_==null?void 0:_.offsetWidth)-U),Fn(window.innerHeight-sn)};(0,w.useEffect)(function(){Q&&Q($n)},[$n]),(0,w.useEffect)(function(){if(S)try{qs(S)}catch(l){Qn.ZP.destroy(),Qn.ZP.warning("Incorrect data")}},[R,S]),(0,w.useEffect)(function(){T&&bn.current&&js()},[T]),(0,w.useEffect)(function(){D!=null&&D.length&&Gn()},[D,V]),(0,w.useEffect)(function(){if(ln.current&&(D==null?void 0:D.length)>0){var l=ln.current.querySelector("canvas");l?mn.current=l:console.warn("No canvas found inside profileWrapRef")}},[D]),(0,w.useEffect)(function(){var l=[];if(Wn){var g;l=r==null||(g=r.statisticsDescArray)===null||g===void 0?void 0:g.filter(function(p){return p._value>0})}else{var x;l=r==null||(x=r.statisticsDescArray)===null||x===void 0?void 0:x.filter(function(p){return p._value>0&&(p==null?void 0:p.plain_statistics)})}Ts(l)},[r==null?void 0:r.statisticsDescArray]),(0,w.useEffect)(function(){Gn(),En(function(){Gn()},ee)},[]);function Oe(l){var g=l.totalTime,x=l.totalTimePercent,p=l.cpuTime,v=l.waitTime,H=l.cpuTimePercent,k=l.waitTimePercent,A=l.id,I=l.isNode,rn=l.labels,Pn=l.statisticsDescArray,vn=l.name,Ln=l.errors;Pe(A);var Sn={cpuTime:p,waitTime:v,totalTime:g,totalTimePercent:x,cpuTimePercent:H,waitTimePercent:k,labels:rn,statisticsDescArray:Pn,isNode:I,name:vn,id:A,metrics:l==null?void 0:l.metrics,errors:Ln};le(Sn),O==null||O(Sn)}function Be(l){return l.getNodes()}function Ze(l,g){l.setItemState(g,"highlight",!0)}function Fe(l){Be(l).forEach(function(g){l.clearItemStates(g)})}function Jn(){oe({clientX:0,clientY:0,show:!1,text:""})}return(0,e.jsxs)(e.Fragment,{children:[(fn==null?void 0:fn.show)&&(0,e.jsx)(Qe,{position:{x:fn==null?void 0:fn.clientX,y:fn.clientY},title:fn.text}),(0,e.jsxs)("div",{ref:ln,className:"profile-index-container",children:[(D==null?void 0:D.length)>0&&(0,e.jsxs)("div",{className:"profile-index-details-info",children:[(un==null?void 0:un.length)>0&&(0,e.jsxs)("div",{className:"profile-index-top-ranking",children:[(0,e.jsxs)("div",{className:"profile-indx-most-expensive-nodes",children:[" ","Most Expensive Nodes",(0,e.jsxs)("span",{className:"profile-index-ranking-length",children:[" ","(",un==null?void 0:un.length," of ",D==null?void 0:D.length,")"]})]}),(0,e.jsx)("div",{style:{marginTop:"8px"},children:un==null?void 0:un.map(function(l,g){return(0,e.jsxs)("div",{onClick:function(){var p,v,H=l==null?void 0:l.id;if($n!==H){Oe(i()(i()({},l),{},{isNode:!0})),ae(!1);var k=bn.current,A=k==null?void 0:k.cfg.nodes,I=A==null?void 0:A.find(function(_n){return(_n==null?void 0:_n._cfg.id)===H}),rn=k==null?void 0:k.getZoom(),Pn=I==null||(p=I._cfg)===null||p===void 0||(p=p.bboxCache)===null||p===void 0?void 0:p.x,vn=I==null||(v=I._cfg)===null||v===void 0||(v=v.bboxCache)===null||v===void 0?void 0:v.y,Ln=k==null?void 0:k.getWidth(),Sn=k==null?void 0:k.getHeight(),Mn=Ln/2-Pn*rn,m=Sn/2-vn*rn+20;Fe(k),Ze(k,I),(A==null?void 0:A.length)>1&&k.moveTo(Mn,m)}},className:(0,F.Z)("profile-index-top-item-style",$n===l.id&&"profile-index-top-active-item-style"),children:[(0,e.jsxs)("span",{children:[l.name," [",l.id,"]"]}),(0,e.jsx)("span",{className:"profile-index-top-item-time",children:l.totalTimePercent})]},g)})})]}),(0,e.jsxs)("div",{className:(0,F.Z)("profile-index-top-ranking","profile-common-styles-pm"),children:[(0,e.jsxs)("div",{className:"profile-common-styles-few g-box-center-between",children:[(0,e.jsxs)("div",{children:["Profile Overview",(0,e.jsxs)("span",{className:"profile-index-color-text-2",children:[" ",Ae&&"(Finished)"]})]}),!Ae&&h&&(0,e.jsx)(Yn.Z,{title:r!=null&&r.metrics?void 0:"No Metrics",children:(0,e.jsx)(tn.ZP,{disabled:!(r!=null&&r.metrics),onClick:function(){return De(!0)},type:"primary",size:"small",children:(0,e.jsxs)(an.Z,{size:4,children:[r!=null&&r.metrics?(0,e.jsx)(on,{icon:"databend-icon-yulan-dakai_preview-open"}):(0,e.jsx)(on,{icon:"databend-icon-yulan-guanbi_preview-close-one"}),"Metrics"]})})})]}),(0,e.jsxs)("div",{className:"g-mt-8",children:[r.isNode?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"g-t-right",children:r==null?void 0:r.totalTimePercent}),(0,e.jsx)(ut,{data:[{color:"rgb(28, 130, 242)",percent:parseFloat(r.cpuTimePercent)},{color:"rgb(255, 152, 0)",percent:parseFloat(r.waitTimePercent)}]})]}):(0,e.jsxs)("div",{className:"profile-common-styles-bcpc",children:[(0,e.jsx)("span",{children:"Total Execution Time"}),(0,e.jsxs)("span",{className:"profile-index-color-text-1",children:[(0,e.jsxs)("span",{className:"profile-index-color-text-2",children:["(",In(S?(r==null?void 0:r.totalTime)/1e6:d),")"]})," ",r==null?void 0:r.totalTimePercent]})]}),(0,e.jsxs)("div",{className:"profile-common-styles-bcpc",children:[(0,e.jsx)(ve,{width:5,text:"CPU Time",textClass:"profile-index-color-text-2"}),(0,e.jsx)("span",{className:"profile-index-color-text-1",children:r==null?void 0:r.cpuTimePercent})]}),(0,e.jsxs)("div",{className:"profile-common-styles-bcpc",children:[(0,e.jsx)(ve,{width:5,roundColor:"rgb(255, 152, 0)",text:"I/O Time",textClass:"profile-index-color-text-2"}),(0,e.jsx)("span",{className:"profile-index-color-text-1",children:r==null?void 0:r.waitTimePercent})]})]})]}),(r==null||(t=r.errors)===null||t===void 0?void 0:t.length)>0&&(0,e.jsxs)("div",{className:(0,F.Z)("profile-index-top-ranking","profile-index-top-ranking-errors","profile-common-styles-pm"),children:[(0,e.jsxs)(an.Z,{className:"profile-common-styles-few g-color-text-danger",children:["Errors",dn&&dn]}),r==null||(s=r.errors)===null||s===void 0?void 0:s.map(function(l,g){return(0,e.jsxs)("div",{className:"g-mt-10",children:[(0,e.jsx)("div",{className:"profile-index-color-text-1",children:l==null?void 0:l._errorType}),(0,e.jsxs)("div",{className:"profile-common-styles-gbp profile-index-color-text-2",children:[(0,e.jsxs)("div",{className:"g-class-ellipsis",children:["message:",(0,e.jsx)(me,{placement:"rightTop",destroyTooltipOnHide:!0,content:l==null?void 0:l.message,buttonText:"message",children:l==null?void 0:l.message})]}),(0,e.jsxs)("div",{className:"g-class-ellipsis",children:["detail:",(0,e.jsx)(Yn.Z,{destroyTooltipOnHide:!0,title:l==null?void 0:l.detail,children:l==null?void 0:l.detail})]}),(0,e.jsxs)("div",{className:"g-class-ellipsis",children:["backtrace:",(0,e.jsx)(me,{placement:"rightTop",destroyTooltipOnHide:!0,content:l==null?void 0:l.backtrace,buttonText:"backtrace",children:l==null?void 0:l.backtrace})]})]})]},g)})]}),(Tn==null?void 0:Tn.length)>0&&(0,e.jsxs)("div",{className:(0,F.Z)("profile-index-top-ranking","profile-common-styles-pm"),children:[(0,e.jsx)("div",{className:"profile-common-styles-few",children:"Statistics"}),(0,e.jsx)("div",{className:"g-mt-8",children:Tn==null?void 0:Tn.map(function(l,g){return(0,e.jsxs)("div",{className:"profile-common-styles-bcpc",children:[(0,e.jsx)("span",{children:l==null?void 0:l.display_name}),(0,e.jsx)("span",{className:"profile-index-color-text-1",children:rs(l.unit,l==null?void 0:l._value)})]},g)})})]}),(r==null||(a=r.labels)===null||a===void 0?void 0:a.length)>0&&(0,e.jsxs)("div",{className:(0,F.Z)("profile-index-top-ranking","profile-common-styles-pm"),children:[(0,e.jsx)("div",{className:"profile-common-styles-few",children:"Attributes"}),r==null||(u=r.labels)===null||u===void 0?void 0:u.map(function(l,g){var x;return(0,e.jsxs)("div",{className:"g-mt-10",children:[(0,e.jsx)("div",{className:"profile-index-color-text-1",children:l==null?void 0:l.name}),(0,e.jsx)("div",{children:(0,e.jsx)("div",{className:"profile-common-styles-gbp profile-index-color-text-2",children:l==null||(x=l.value)===null||x===void 0?void 0:x.map(function(p){return(0,e.jsx)("div",{style:{wordWrap:"break-word"},children:p},p)})})})]},g)})]})]}),T?(0,e.jsx)("div",{className:"g-box-c",style:{height:"700px"},children:(0,e.jsx)(_e,{})}):(0,e.jsx)(e.Fragment,{children:(D==null?void 0:D.length)>0?(0,e.jsx)(jt,{onShare:jn,queryId:f,plainData:D,graphSize:Hn,graphSizeHeight:An,graphRef:bn,isLight:E,handleResize:Gn,overviewInfoCurrent:pn,onReady:function(g){bn.current=g,g.setMaxZoom(2),g.on("node:click",function(x){ae(!1);var p=x.item._cfg.model;Oe(i()(i()({},p),{},{isNode:!0}));var v=Be(g),H=x.item._cfg.id,k=v==null?void 0:v.find(function(A){return(A==null?void 0:A._cfg.id)===H});v==null||v.filter(function(A){return A._cfg.id!==H}).forEach(function(A){g.clearItemStates(A)}),Ze(g,k)}),g.on("node:mouseleave",function(){mn.current&&(mn.current.style.cursor="move"),Jn()}),g.on("node:mouseover",function(x){var p,v=x==null||(p=x.target)===null||p===void 0||(p=p.cfg)===null||p===void 0?void 0:p.name;if(v!=null&&v.includes("percentage-output-text")){var H,k=x.clientX,A=x.clientY,I=x==null||(H=x.item)===null||H===void 0||(H=H._cfg)===null||H===void 0||(H=H.model)===null||H===void 0?void 0:H.outputRows;oe({clientX:k-70,clientY:A-52,show:!0,text:"Output Rows: ".concat(Vn(I))})}else Jn()}),g.on("canvas:click",function(){Pe(""),ae(!0),le(pn==null?void 0:pn.current),O==null||O(pn==null?void 0:pn.current),Fe(g)}),g.on("canvas:dragstart",function(){ln.current.style.userSelect="none"}),g.on("canvas:dragend",function(){ln.current.style.userSelect="unset"}),g.on("edge:mouseover",function(x){var p,v,H=x==null||(p=x.target)===null||p===void 0||(p=p.cfg)===null||p===void 0?void 0:p.type,k=x==null||(v=x.item)===null||v===void 0||(v=v._cfg)===null||v===void 0||(v=v.model)===null||v===void 0?void 0:v._value,A=x.clientX,I=x.clientY;H==="text"?oe({clientX:A-40,clientY:I-50,show:!0,text:"Rows: ".concat(Vn(k))}):Jn()}),g.on("edge:mouseleave",function(){mn.current&&(mn.current.style.cursor="move"),Jn()})}}):(0,e.jsx)("div",{style:{minHeight:"700px"},children:(0,e.jsx)(lt,{title:"No Profile",paddingTop:"150px",subTitle:(0,e.jsxs)("div",{children:["Some queries, such as those with"," ",(0,e.jsx)("span",{style:{fontWeight:700},children:"USE"})," and"," ",(0,e.jsx)("span",{style:{fontWeight:700},children:"DESCRIBE"})," ","statements, have no query profile."]}),TopIcon:(0,e.jsx)(on,{icon:"databend-icon-zuzhijiagou"})})})})]}),(0,e.jsx)(os,{drawerWidth:On,isLight:E,metricsData:r==null?void 0:r.metrics,title:"Metrics Details: ".concat(r==null?void 0:r.name,"[").concat(r==null?void 0:r.id,"]  ").concat(r==null?void 0:r.totalTimePercent),onClose:function(){return De(!1)},open:Rs})]})},je=(0,w.memo)(_s),ds=o(71090),is=o(58206),hs=o(55753),ms=ds.Z.TextArea,ps=function(n){var t,s=n.isDemo,a=s===void 0?!1:s,u=n.isNeedMetrics,_=u===void 0?!1:u,d=n.canShare,b=d===void 0?!1:d,f=n.showBack,S=f===void 0?!0:f,R=(0,w.useState)(""),y=q()(R,2),U=y[0],P=y[1],sn=(0,w.useState)(""),N=q()(sn,2),V=N[0],Z=N[1],T=(0,w.useState)(0),C=q()(T,2),h=C[0],$=C[1],G=(0,w.useState)(!1),L=q()(G,2),E=L[0],K=L[1];(0,we.Z)(function(){if(b){var M=Ke(Xe("value"));M&&P(M)}});function Q(){$(h+1);try{var M;Z((M=JSON.parse(U))===null||M===void 0?void 0:M.query_id)}catch(O){}}return(0,e.jsxs)("div",{className:"g-pa-24 g-align-s site-layout-right",style:{gap:"12px"},children:[(0,e.jsxs)(an.Z,{size:12,className:"g-pl-10 g-pr",direction:"vertical",children:[!E&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ms,{placeholder:"Please copy the profile log json you generated",className:"g-border-radius-middle g-border g-color-bg-1",value:U,onChange:function(O){P(O.target.value)},style:{width:"320px",height:"calc(100vh - 100px)"}}),(0,e.jsxs)(an.Z,{className:"g-box-center-between",children:[(0,e.jsxs)(an.Z,{children:[S&&(0,e.jsx)(tn.ZP,{type:"link",href:"/",children:"Back"}),(0,e.jsx)(tn.ZP,{type:"dashed",onClick:function(){P(hs.DEMO),Q()},children:"Demo"})]}),(0,e.jsxs)(an.Z,{children:[(0,e.jsx)(tn.ZP,{disabled:!U,type:"primary",onClick:function(){return $(h+1)},children:"Show"}),(0,e.jsx)(tn.ZP,{onClick:function(){P("")},children:"Clear"})]})]})]}),(0,e.jsx)(tn.ZP,{style:{position:"fixed",bottom:"80px",left:"10px",zIndex:10},type:"primary",onClick:function(){K(!E)},icon:(0,e.jsx)(on,{icon:E?"databend-icon-zhankai_expand-left":"databend-icon-zhankai_expand-right"})})]}),(0,e.jsx)("div",{className:"g-pa-6 g-color-bg-1 g-box-flex g-border-radius-middle",style:{cursor:"pointer"},children:(0,e.jsx)(je,{onShare:b?function(){(0,is.Z)(window.location.origin+window.location.pathname+"?value="+Je(U)),Qn.ZP.success("Copied to clipboard")}:void 0,offsetWidth:a?E?900:1200:E?100:695,isNeedMetrics:_,offsetHeight:60,countShow:h,outValue:U&&Ge(U)?JSON.parse(U):"",showTextArea:E,queryId:V,queryDuration:0,profileRef:(t=document)===null||t===void 0?void 0:t.body})})]})},fs=ps},14633:function(zn,X,o){o.r(X),o.d(X,{texts:function(){return i}});var yn=o(97753);const i=[{value:`outValue?: JSON;
profileRef?: any;
queryDuration: number;
orgSlug?: string;
queryId?: string;
countShow?: number;
offsetWidth?: number;
offsetHeight?: number;
showTextArea?: boolean;
initLoading?: boolean;
isDemo?: boolean;
isLight?: boolean;
ErrorTicketDom?: ReactElement;
getActiveName?: (name: string) => void;
getOverviewInfo?: (modal: any) => void;
responseDom?: string;

`,paraId:0,tocIndex:2}]},45760:function(zn,X){X.Z=`export const DEMO = \`{
        "query_id": "ffffff-ca85-429b-3333-7f0ba074ba40",
        "tenant": "dsfdfsafad",
        "warehouse": "ddfdfdf-12290927528",
        "warehouse_size": "Large",
        "profiles": [
            {
                "cpu_time": 0,
                "id": 7,
                "name": "TableScan",
                "parent_id": 5,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "defaultt.'clickbeddddd'.'orders'",
                "labels": [
                    {
                        "name": "Total partitions",
                        "value": [
                            "16"
                        ]
                    },
                    {
                        "name": "Full table name",
                        "value": [
                            "defaultt.'clickbeddddd'.'orders'"
                        ]
                    },
                    {
                        "name": "Columns (1 / 9)",
                        "value": [
                            "f_custkey"
                        ]
                    }
                ],
                "statistics": [
                    1989598053,
                    29714520422,
                    0,
                    0,
                    117623484,
                    940987872,
                    940987872,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": {
                    "MXv6j6mw7I7iqAZ9HKCon1": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 1.068248789
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 50
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 4.27322031699999
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 14677
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 24,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 14653,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 14672,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 126586706
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 14677
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 50,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 106,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 6973,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 7084,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 7183,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 7209,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 14677,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 50
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 100
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 100
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 50
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 253173412
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 50
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 126586706
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 50
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 126586706
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 22,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 35,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 50,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ],
                    "W85FoM0nmEKwJ5vMXmczS6": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 1.277621996
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 52
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 5.596121807999999
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 16139
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 16120,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 16137,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 16138,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 16138,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 16138,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 23,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 138312874
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 16139
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 52,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 104,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 7838,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 7922,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 8003,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 8036,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 16139,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 52
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 104
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 104
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 276625748
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 52
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 138312874
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 52
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 138312874
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 52
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 31,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ],
                    "XP1MqjBwxL5jW9lvGd7Sy7": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 7.0855691400000005
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 14171
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 1.259011292
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 49
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 14154,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 14168,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 14168,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 14170,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 14170,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 16,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 48,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 48,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 48,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 122518966
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 14171
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 49,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 102,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 6876,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 6942,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 7005,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 7022,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 14171,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 49
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 98
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 98
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 245037932
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 49
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 122518966
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 49
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 122518966
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 49
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 6,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 47,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 39,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ],
                    "qLuPi9lHI51UAccHO6tij5": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 7.435440037000013
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 14965
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 1.0585076369999995
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 51
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 14947,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 14960,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 14960,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 14961,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 14961,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 129146872
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 14965
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 51,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 52,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 53,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 53,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 107,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 7203,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 7294,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 7366,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 7393,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 14965,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 51
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 102
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 102
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 258293744
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 51
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 129146872
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 51
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 129146872
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 51
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 2,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 4,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 49,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 36,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 51,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ]
                },
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 2,
                "name": "AggregatePartial",
                "parent_id": 1,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "COUNT(*), sum(c_acctbal)",
                "labels": [
                    {
                        "name": "Grouping keys",
                        "value": [
                            "custsale.cntrycode (#28)"
                        ]
                    },
                    {
                        "name": "Aggregate Functions",
                        "value": [
                            "COUNT(*)",
                            "sum(c_acctbal)"
                        ]
                    }
                ],
                "statistics": [
                    14030377,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": null,
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 11,
                "name": "TableScan",
                "parent_id": 10,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "defaultt.'clickbeddddd'.'customer'",
                "labels": [
                    {
                        "name": "Columns (3 / 8)",
                        "value": [
                            "c_acctbal",
                            "c_custkey",
                            "c_phone"
                        ]
                    },
                    {
                        "name": "Total partitions",
                        "value": [
                            "16"
                        ]
                    },
                    {
                        "name": "Full table name",
                        "value": [
                            "defaultt.'clickbeddddd'.'customer'"
                        ]
                    }
                ],
                "statistics": [
                    1195790021,
                    4416056607,
                    0,
                    0,
                    14999995,
                    824999725,
                    824999725,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": {
                    "MXv6j6mw7I7iqAZ9HKCon1": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 0.30180643200000024
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 4051
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 0.26843945499999994
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 15
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 12,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 4051,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 34705491
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 4051
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 15,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 16,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 30,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 1862,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 1916,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 1964,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 1975,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 4051,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 15
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 30
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 30
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 5
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 69410982
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 15
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 34705491
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 15
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 34705491
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 2,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 4,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ],
                    "W85FoM0nmEKwJ5vMXmczS6": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 1.478570624999996
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 6407
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 0.4401703699999999
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 21
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 11,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 6402,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 6406,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 6406,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 6406,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 6406,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 55157571
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 6407
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 21,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 22,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 44,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 3054,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 3083,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 3131,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 3151,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 6407,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 7
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 42
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 42
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 110315142
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 21
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 55157571
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 21
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 55157571
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 21
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 2,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 6,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 4,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ],
                    "XP1MqjBwxL5jW9lvGd7Sy7": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 0.307361116
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 15
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 2.0972269870000053
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 4025
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 4020,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 4022,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 4022,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 4022,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 4022,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 34628900
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 4025
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 15,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 15,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 29,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 1921,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 1957,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 1976,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 1987,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 4025,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 5
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 30
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 30
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 69257800
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 15
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 34628900
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 15
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 34628900
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 15
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 3,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 4,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ],
                    "qLuPi9lHI51UAccHO6tij5": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 2.7740308989999924
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 6368
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 0.4124586830000001
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 21
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 6360,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 6366,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 6366,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 6366,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 6366,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 12,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 55051085
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 6368
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 21,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 21,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 41,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 3099,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 3131,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 3155,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 3166,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 6368,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 7
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 42
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 42
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 110102170
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 21
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 55051085
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 21
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 55051085
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 21
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 6,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 4,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ]
                },
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 1,
                "name": "AggregateFinal",
                "parent_id": 0,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "COUNT(*), sum(c_acctbal)",
                "labels": [
                    {
                        "name": "Aggregate Functions",
                        "value": [
                            "COUNT(*)",
                            "sum(c_acctbal)"
                        ]
                    },
                    {
                        "name": "Grouping keys",
                        "value": [
                            "custsale.cntrycode (#28)"
                        ]
                    }
                ],
                "statistics": [
                    954537,
                    0,
                    0,
                    0,
                    7,
                    257,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": null,
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 15,
                "name": "AggregatePartial",
                "parent_id": 13,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "sum(c_acctbal), count(c_acctbal)",
                "labels": [
                    {
                        "name": "Aggregate Functions",
                        "value": [
                            "sum(c_acctbal)",
                            "count(c_acctbal)"
                        ]
                    }
                ],
                "statistics": [
                    16749443,
                    0,
                    0,
                    0,
                    64,
                    1600,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": null,
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 18,
                "name": "TableScan",
                "parent_id": 17,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "defaultt.'clickbeddddd'.'customer'",
                "labels": [
                    {
                        "name": "Full table name",
                        "value": [
                            "defaultt.'clickbeddddd'.'customer'"
                        ]
                    },
                    {
                        "name": "Total partitions",
                        "value": [
                            "16"
                        ]
                    },
                    {
                        "name": "Columns (2 / 8)",
                        "value": [
                            "c_acctbal",
                            "c_phone"
                        ]
                    }
                ],
                "statistics": [
                    986795649,
                    5119734976,
                    0,
                    0,
                    14999995,
                    704999765,
                    704999765,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": {
                    "MXv6j6mw7I7iqAZ9HKCon1": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 0.236900044
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 10
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 1.2314700430000052
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 3670
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 2,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 3666,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 31756738
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 3670
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 10,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 19,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 1781,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 1795,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 1812,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 1819,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 3670,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 10
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 20
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 20
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 5
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 63513476
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 10
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 31756738
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 10
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 31756738
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 4,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ],
                    "W85FoM0nmEKwJ5vMXmczS6": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 0.31553341
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 14
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 1.619382037000004
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 5795
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 5782,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 5794,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 50470860
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 5795
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 14,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 27,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 2792,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 2814,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 2836,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 2845,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 5795,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 7
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 28
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 28
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 100941720
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 14
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 50470860
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 14
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 50470860
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 14
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 6,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ],
                    "XP1MqjBwxL5jW9lvGd7Sy7": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 1.588360984000003
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 3659
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 0.212095375
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 10
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 4,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 3654,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 3658,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 3658,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 3658,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 3658,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 31686547
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 3659
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 10,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 10,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 19,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 1788,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 1797,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 1808,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 1813,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 3659,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 5
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 20
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 20
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 63373094
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 10
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 31686547
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 10
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 31686547
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 10
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 4,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 5,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ],
                    "qLuPi9lHI51UAccHO6tij5": [
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 2.6889280109999927
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 5807
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_sum",
                            "value": {
                                "Untyped": 0.300029295
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_count",
                            "value": {
                                "Untyped": 14
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_duration_seconds_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 5802,
                                        "less_than": 0.01
                                    },
                                    {
                                        "count": 5805,
                                        "less_than": 0.02
                                    },
                                    {
                                        "count": 5805,
                                        "less_than": 0.04
                                    },
                                    {
                                        "count": 5805,
                                        "less_than": 0.08
                                    },
                                    {
                                        "count": 5805,
                                        "less_than": 0.16
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 0.32
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 0.64
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 1.28
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 2.56
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 5.12
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 10.24
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 20.48
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 40.96
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 81.92
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 163.84
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 327.68
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_sum",
                            "value": {
                                "Untyped": 50337580
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_count",
                            "value": {
                                "Untyped": 5807
                            }
                        },
                        {
                            "labels": {
                                "namespace": "query-storage-bd5efc6",
                                "operation": "Reader::read",
                                "root": "/dsfdfsafad/",
                                "scheme": "s3"
                            },
                            "name": "opendal_operation_bytes_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 14,
                                        "less_than": 1
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 2
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 4
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 8
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 16
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 32
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 64
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 128
                                    },
                                    {
                                        "count": 14,
                                        "less_than": 256
                                    },
                                    {
                                        "count": 27,
                                        "less_than": 512
                                    },
                                    {
                                        "count": 2848,
                                        "less_than": 1024
                                    },
                                    {
                                        "count": 2861,
                                        "less_than": 2048
                                    },
                                    {
                                        "count": 2881,
                                        "less_than": 4096
                                    },
                                    {
                                        "count": 2889,
                                        "less_than": 8192
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 16384
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 32768
                                    },
                                    {
                                        "count": 5807,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_parts_total",
                            "value": {
                                "Counter": 7
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_access_count_total",
                            "value": {
                                "Counter": 28
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_count_total",
                            "value": {
                                "Counter": 28
                            }
                        },
                        {
                            "labels": {
                                "cache_name": "Unknown"
                            },
                            "name": "cache_miss_bytes_total",
                            "value": {
                                "Counter": 100675160
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_total",
                            "value": {
                                "Counter": 14
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_total",
                            "value": {
                                "Counter": 50337580
                            }
                        },
                        {
                            "name": "fuse_remote_io_seeks_after_merged_total",
                            "value": {
                                "Counter": 14
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_bytes_after_merged_total",
                            "value": {
                                "Counter": 50337580
                            }
                        },
                        {
                            "labels": {
                                "host": "s3.us-east-2.amazonaws.com",
                                "method": "GET"
                            },
                            "name": "storage_http_requests_count_total",
                            "value": {
                                "Counter": 14
                            }
                        },
                        {
                            "name": "fuse_remote_io_read_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 0,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 6,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        },
                        {
                            "name": "fuse_remote_io_deserialize_milliseconds",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 0,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 4,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 7,
                                        "less_than": 1.7976931348623157e+308
                                    }
                                ]
                            }
                        }
                    ]
                },
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 5,
                "name": "HashJoin",
                "parent_id": 4,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "(customer.c_custkey (#0) = orders.f_custkey (#20))",
                "labels": [
                    {
                        "name": "Join Build Side Keys",
                        "value": [
                            "customer.c_custkey (#0)"
                        ]
                    },
                    {
                        "name": "Join Type",
                        "value": [
                            "RIGHT ANTI"
                        ]
                    },
                    {
                        "name": "Join Probe Side Keys",
                        "value": [
                            "orders.f_custkey (#20)"
                        ]
                    }
                ],
                "statistics": [
                    4319630665,
                    10540906459,
                    0,
                    0,
                    636749,
                    27380207,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": null,
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 12,
                "name": "EvalScalar",
                "parent_id": 8,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "sum(c_acctbal) (#16) / CAST(if(CAST(count(c_acctbal) (#17) = 0 AS Boolean NULL), 1, count(c_acctbal) (#17)) AS UInt64 NULL)",
                "labels": [
                    {
                        "name": "List of Expressions",
                        "value": [
                            "sum(c_acctbal) (#16) / CAST(if(CAST(count(c_acctbal) (#17) = 0 AS Boolean NULL), 1, count(c_acctbal) (#17)) AS UInt64 NULL)"
                        ]
                    }
                ],
                "statistics": [
                    56172,
                    0,
                    0,
                    0,
                    1,
                    17,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": null,
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 8,
                "name": "HashJoin",
                "parent_id": 5,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "CAST(customer.c_acctbal (#5) AS Decimal(15, 2) NULL) \\u003e scalar_subquery_18 (#18)",
                "labels": [
                    {
                        "name": "Join Type",
                        "value": [
                            "INNER"
                        ]
                    },
                    {
                        "name": "Join Conditions",
                        "value": [
                            "CAST(customer.c_acctbal (#5) AS Decimal(15, 2) NULL) \\u003e scalar_subquery_18 (#18)"
                        ]
                    }
                ],
                "statistics": [
                    191044754,
                    5696354771,
                    0,
                    0,
                    1909667,
                    97393017,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": null,
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 17,
                "name": "Filter",
                "parent_id": 15,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "customer.c_acctbal (#13) \\u003e 0.00",
                "labels": [
                    {
                        "name": "Filter condition",
                        "value": [
                            "customer.c_acctbal (#13) \\u003e 0.00",
                            "contains(['13', '31', '23', '29', '30', '18', '17'], substr(customer.c_phone (#12), 1, 2))"
                        ]
                    }
                ],
                "statistics": [
                    889798815,
                    0,
                    0,
                    0,
                    3819171,
                    61106736,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": null,
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 0,
                "name": "Sort",
                "parent_id": null,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "cntrycode",
                "labels": [],
                "statistics": [
                    162132,
                    0,
                    0,
                    0,
                    7,
                    257,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": null,
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 13,
                "name": "AggregateFinal",
                "parent_id": 12,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "sum(c_acctbal), count(c_acctbal)",
                "labels": [
                    {
                        "name": "Aggregate Functions",
                        "value": [
                            "sum(c_acctbal)",
                            "count(c_acctbal)"
                        ]
                    }
                ],
                "statistics": [
                    108056,
                    0,
                    0,
                    0,
                    1,
                    25,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": null,
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 10,
                "name": "Filter",
                "parent_id": 8,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "contains(['13', '31', '23', '29', '30', '18', '17'], substr(customer.c_phone (#4), 1, 2))",
                "labels": [
                    {
                        "name": "Filter condition",
                        "value": [
                            "contains(['13', '31', '23', '29', '30', '18', '17'], substr(customer.c_phone (#4), 1, 2))"
                        ]
                    }
                ],
                "statistics": [
                    918363174,
                    0,
                    0,
                    0,
                    4201380,
                    214270380,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": null,
                "errors": []
            },
            {
                "cpu_time": 0,
                "id": 4,
                "name": "EvalScalar",
                "parent_id": 2,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "substr(customer.c_phone (#4), 1, 2)",
                "labels": [
                    {
                        "name": "List of Expressions",
                        "value": [
                            "substr(customer.c_phone (#4), 1, 2)"
                        ]
                    }
                ],
                "statistics": [
                    18731081,
                    0,
                    0,
                    0,
                    636749,
                    17828972,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "metrics": null,
                "errors": []
            }
        ],
        "statistics_desc": {
            "CpuTime": {
                "desc": "The time spent to process in nanoseconds",
                "display_name": "cpu time",
                "index": 0,
                "plain_statistics": false,
                "unit": "NanoSeconds"
            },
            "ExchangeBytes": {
                "desc": "The number of data bytes exchange between nodes in cluster mode",
                "display_name": "exchange bytes",
                "index": 3,
                "plain_statistics": true,
                "unit": "Bytes"
            },
            "ExchangeRows": {
                "desc": "The number of data rows exchange between nodes in cluster mode",
                "display_name": "exchange rows",
                "index": 2,
                "plain_statistics": true,
                "unit": "Rows"
            },
            "ExternalServerRequestCount": {
                "desc": "The count of external server request times",
                "display_name": "external server request count",
                "index": 24,
                "plain_statistics": true,
                "unit": "Count"
            },
            "ExternalServerRetryCount": {
                "desc": "The count of external server retry times",
                "display_name": "external server retry count",
                "index": 23,
                "plain_statistics": true,
                "unit": "Count"
            },
            "LocalSpillReadBytes": {
                "desc": "The bytes local spilled by read",
                "display_name": "bytes local spilled by read",
                "index": 19,
                "plain_statistics": true,
                "unit": "Bytes"
            },
            "LocalSpillReadCount": {
                "desc": "The number of local spilled by read",
                "display_name": "numbers local spilled by read",
                "index": 18,
                "plain_statistics": true,
                "unit": "Count"
            },
            "LocalSpillReadTime": {
                "desc": "The time spent to read local spill in millisecond",
                "display_name": "local spilled time by read",
                "index": 20,
                "plain_statistics": false,
                "unit": "MillisSeconds"
            },
            "LocalSpillWriteBytes": {
                "desc": "The bytes local spilled by write",
                "display_name": "bytes local spilled by write",
                "index": 16,
                "plain_statistics": true,
                "unit": "Bytes"
            },
            "LocalSpillWriteCount": {
                "desc": "The number of local spilled by write",
                "display_name": "numbers local spilled by write",
                "index": 15,
                "plain_statistics": true,
                "unit": "Count"
            },
            "LocalSpillWriteTime": {
                "desc": "The time spent to write local spill in millisecond",
                "display_name": "local spilled time by write",
                "index": 17,
                "plain_statistics": false,
                "unit": "MillisSeconds"
            },
            "MemoryUsage": {
                "desc": "The real time memory usage",
                "display_name": "memory usage",
                "index": 22,
                "plain_statistics": false,
                "unit": "Bytes"
            },
            "OutputBytes": {
                "desc": "The number of bytes from the physical plan output to the next physical plan",
                "display_name": "output bytes",
                "index": 5,
                "plain_statistics": true,
                "unit": "Bytes"
            },
            "OutputRows": {
                "desc": "The number of rows from the physical plan output to the next physical plan",
                "display_name": "output rows",
                "index": 4,
                "plain_statistics": true,
                "unit": "Rows"
            },
            "RemoteSpillReadBytes": {
                "desc": "The bytes remote spilled by read",
                "display_name": "bytes remote spilled by read",
                "index": 13,
                "plain_statistics": true,
                "unit": "Bytes"
            },
            "RemoteSpillReadCount": {
                "desc": "The number of remote spilled by read",
                "display_name": "numbers remote spilled by read",
                "index": 12,
                "plain_statistics": true,
                "unit": "Count"
            },
            "RemoteSpillReadTime": {
                "desc": "The time spent to read remote spill in millisecond",
                "display_name": "remote spilled time by read",
                "index": 14,
                "plain_statistics": false,
                "unit": "MillisSeconds"
            },
            "RemoteSpillWriteBytes": {
                "desc": "The bytes remote spilled by write",
                "display_name": "bytes remote spilled by write",
                "index": 10,
                "plain_statistics": true,
                "unit": "Bytes"
            },
            "RemoteSpillWriteCount": {
                "desc": "The number of remote spilled by write",
                "display_name": "numbers remote spilled by write",
                "index": 9,
                "plain_statistics": true,
                "unit": "Count"
            },
            "RemoteSpillWriteTime": {
                "desc": "The time spent to write remote spill in millisecond",
                "display_name": "remote spilled time by write",
                "index": 11,
                "plain_statistics": false,
                "unit": "MillisSeconds"
            },
            "RuntimeFilterPruneParts": {
                "desc": "The partitions pruned by runtime filter",
                "display_name": "parts pruned by runtime filter",
                "index": 21,
                "plain_statistics": true,
                "unit": "Count"
            },
            "ScanBytes": {
                "desc": "The bytes scanned of query",
                "display_name": "bytes scanned",
                "index": 6,
                "plain_statistics": true,
                "unit": "Bytes"
            },
            "ScanCacheBytes": {
                "desc": "The bytes scanned from cache of query",
                "display_name": "bytes scanned from cache",
                "index": 7,
                "plain_statistics": true,
                "unit": "Bytes"
            },
            "ScanPartitions": {
                "desc": "The partitions scanned of query",
                "display_name": "partitions scanned",
                "index": 8,
                "plain_statistics": true,
                "unit": "Count"
            },
            "WaitTime": {
                "desc": "The time spent to wait in nanoseconds, usually used to measure the time spent on waiting for I/O",
                "display_name": "wait time",
                "index": 1,
                "plain_statistics": false,
                "unit": "NanoSeconds"
            }
        }
    }\``}}]);
