"use strict";(self.webpackChunkdatabend_profile_ui=self.webpackChunkdatabend_profile_ui||[]).push([[152],{25840:function(An,G,l){l.r(G),l.d(G,{demos:function(){return Wn}});var mn=l(15009),h=l.n(mn),On=l(99289),k=l.n(On),D=l(67294),B=l(97753),T=l(92707),En=l(55753),Wn={"queryprofile-demo-0":{component:D.memo(D.lazy(k()(h()().mark(function nn(){var J,K,X,O;return h()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,Promise.resolve().then(l.bind(l,92707));case 2:return J=q.sent,K=J.QueryProfile,q.next=6,Promise.resolve().then(l.bind(l,55753));case 6:return X=q.sent,O=X.DEMO,q.abrupt("return",{default:function(){return D.createElement(K,{isDemo:!0,outValue:JSON.parse(O),profileRef:"body"})}});case 9:case"end":return q.stop()}},nn)})))),asset:{type:"BLOCK",id:"queryprofile-demo-0",refAtomIds:["QueryProfile"],dependencies:{"index.jsx":{type:"FILE",value:`import { QueryProfile } from 'databend-profile-ui';
import { DEMO } from './demo';

export default () => (
  <QueryProfile isDemo={true} outValue={JSON.parse(DEMO)} profileRef={'body'} />
);`},"databend-profile-ui":{type:"NPM",value:"0.0.28"},"./demo.ts":{type:"FILE",value:l(45760).Z}},entry:"index.jsx"},context:{"./demo.ts":En,"databend-profile-ui":T,"/home/runner/work/databend-profile-ui/databend-profile-ui/src/QueryProfile/demo.ts":En},renderOpts:{compile:function(){var nn=k()(h()().mark(function K(){var X,O=arguments;return h()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,l.e(335).then(l.bind(l,37335));case 2:return q.abrupt("return",(X=q.sent).default.apply(X,O));case 3:case"end":return q.stop()}},K)}));function J(){return nn.apply(this,arguments)}return J}()}},"queryprofile-demo-1":{component:D.memo(D.lazy(k()(h()().mark(function nn(){var J,K;return h()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(l.bind(l,92707));case 2:return J=O.sent,K=J.TestProfile,O.abrupt("return",{default:function(){return D.createElement(K,{isDemo:!0})}});case 5:case"end":return O.stop()}},nn)})))),asset:{type:"BLOCK",id:"queryprofile-demo-1",refAtomIds:["QueryProfile"],dependencies:{"index.jsx":{type:"FILE",value:`import { TestProfile } from 'databend-profile-ui';

export default () => <TestProfile isDemo />;`},"databend-profile-ui":{type:"NPM",value:"0.0.28"}},entry:"index.jsx"},context:{"databend-profile-ui":T},renderOpts:{compile:function(){var nn=k()(h()().mark(function K(){var X,O=arguments;return h()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,l.e(335).then(l.bind(l,37335));case 2:return q.abrupt("return",(X=q.sent).default.apply(X,O));case 3:case"end":return q.stop()}},K)}));function J(){return nn.apply(this,arguments)}return J}()}}}},55753:function(An,G,l){l.r(G),l.d(G,{DEMO:function(){return mn}});var mn=`{
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
    }`},92707:function(An,G,l){l.r(G),l.d(G,{QueryProfile:function(){return Ce},TestProfile:function(){return Xt}});var mn=l(97857),h=l.n(mn),On=l(5574),k=l.n(On),D=l(92652),B=l(90512),T=l(67294),En=l(92077),Wn=l.n(En),nn=l(79830),J=l(47539),K=l(29879),X=l.n(K);function O(c){var n;return c<=999?c:(n=Wn()(c).format("0.0a"))===null||n===void 0?void 0:n.toUpperCase()}function Tn(c){var n=document.createElement("div");n.style.position="absolute",n.style.whiteSpace="nowrap",n.style.fontSize="12px",n.style.visibility="hidden",n.textContent=c,document.body.appendChild(n);var t=n.offsetWidth;return document.body.removeChild(n),t}var q=function(n){return(0,nn.format)(n,{thousandsSeparator:","})},Rn=function(n){return n!==void 0?(0,J.Z)(Number(n)||0):"0ms"},Bn=function(n){return X()(n||0)},rs=function(n){if(n<=60)return n.toFixed(0)+"s";var t=Math.floor(n/60),s=n-t*60;return t+"m"+(s>=1?s.toFixed(0)+"s":"")};function Un(c,n){return n<=0?"0%":(c/n*100).toFixed(1)+"%"}function Le(c){try{return JSON.parse(c),!0}catch(n){return!1}}var ee=l(84573),Zn=l(57607),V=l(11889),en=l(26713),e=l(85893),Me=function(n){var t=n.position,s=n.title;return(0,e.jsx)("div",{style:{left:t.x+"px",top:t.y+"px"},className:(0,B.Z)("databend-self-tooltip"),children:s})},ze=Me,Ie=l(13769),Sn=l.n(Ie),De=l(50888),Oe=l(11382),We=["className","children"],Be=(0,e.jsx)(De.Z,{style:{fontSize:24},spin:!0}),Ze=function(n){var t=n.className,s=n.children,a=Sn()(n,We);return(0,e.jsx)(Oe.Z,h()(h()({style:{zIndex:2e3},className:t},a),{},{indicator:Be,children:s}))},te=Ze,Fe=function(n){var t=n.onButtonClick,s=n.title,a=n.subTitle,u=n.buttonText,i=n.buttonArea,d=n.loading,v=d===void 0?!1:d,p=n.width,x=p===void 0?"360px":p,C=n.paddingTop,b=C===void 0?"66px":C,R=n.TopIcon,L=a||"There is no related resource, you can try to refresh or create a new resource";return(0,e.jsx)(te,{spinning:v,children:(0,e.jsx)("div",{className:"profile-no-result-with-action",style:{paddingTop:b},children:(0,e.jsx)("div",{style:{width:x},className:"profile-no-result-with-action-wrap",children:(0,e.jsxs)(en.Z,{direction:"vertical",className:"profile-no-result-with-action-content",size:12,children:[R&&(0,e.jsx)(V.Z,{className:"pointer-events-none",icon:R}),(0,e.jsx)("div",{className:"profile-no-result-with-action-title",children:s}),a!==null&&(0,e.jsx)("div",{className:"profile-no-result-with-action-sub-title",children:L}),i?(0,e.jsx)(e.Fragment,{children:i}):(0,e.jsx)(e.Fragment,{children:u&&(0,e.jsx)(V.Z,{onClick:function(M){return t&&t(M)},type:"primary",children:u})})]})})})})},Ge=(0,T.memo)(Fe),$e=function(n){var t=n.data,s=(0,T.useState)(""),a=k()(s,2),u=a[0],i=a[1];return(0,T.useEffect)(function(){if(t!=null&&t.length){var d="linear-gradient(90deg",v=0;t.forEach(function(p){d+=", ".concat(p.color," ").concat(v,"%"),v+=p.percent,d+=", ".concat(p.color," ").concat(v,"%")}),d+=")",i(d)}},[t]),(0,e.jsx)(e.Fragment,{children:u&&(0,e.jsx)("div",{style:{height:"8px",borderRadius:"4px",backgroundImage:u}})})},Je=(0,T.memo)($e),Ke=l(44107),Xe={errorTip:"kCjZdetPcq0VpgDgIYRf"},Ve=l(42481),Qe=l(56986),Ye=l(20640),se=l.n(Ye),nt=function(n){var t=n.containerRef,s=n.className,a=n.copyText,u="Copy",i="Copied",d=(0,T.useState)(u),v=k()(d,2),p=v[0],x=v[1],C=function(){if(x(i),a)se()(a);else if(t){var R;se()(t==null||(R=t.current)===null||R===void 0?void 0:R.innerText)}};return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(V.Z,{onMouseLeave:function(){return x(u)},onClick:function(){return C()},className:(0,B.Z)(s),type:"primary",children:p})})},et=(0,T.memo)(nt),ae=function(n){var t=n.content,s=n.buttonText,a=n.isString,u=n.height,i=n.copyText,d=n.CustomArea,v=n.isBreakLine,p=(0,T.useRef)(null),x=a?t:JSON.stringify(JSON.parse(t),null,2);return(0,e.jsxs)("div",{style:{height:u+"px"},className:"db-code-content-container",children:[s&&(0,e.jsx)(V.Z,{className:"db-code-content-button-text",style:{top:0,left:"20px",borderTopLeftRadius:0,borderTopRightRadius:0},type:"primary",children:s}),(0,e.jsx)("div",{className:"db-code-content-copy",children:(0,e.jsxs)(en.Z,{children:[d&&d,(0,e.jsx)(et,{className:"db-code-content--button",copyText:i||t,containerRef:p})]})}),(0,e.jsx)("div",{className:(0,B.Z)("db-code-content-block",v&&"db-code-content-break-line"),style:{fontWeight:500,whiteSpace:"pre-wrap"},ref:p,children:(0,e.jsx)(Ve.Z,{style:Qe.Z,children:x})})]})};ae.defaultProps={buttonText:"Meta data",isString:!0,height:"auto",isBreakLine:!1};var oe=ae,tt=["content","children","buttonText"],le=function(n){var t=n.content,s=n.children,a=n.buttonText,u=Sn()(n,tt);return(0,e.jsx)(Zn.Z,h()(h()({overlayClassName:Xe.errorTip,overlayInnerStyle:{padding:0},title:(0,e.jsx)(oe,{buttonText:a,content:t||""})},u),{},{children:s}))};le.defaultProps={buttonText:"Failed Text"};var ce=le,st=function(n){var t=n.icon,s=t===void 0?"databend-icon-xihuan_like":t,a=n.className,u=n.onClick,i=n.style,d=n.size,v=d===void 0?18:d;return(0,e.jsx)("span",{className:"g-box-c",children:(0,e.jsx)("i",{onClick:function(x){return u&&u(x)},className:(0,B.Z)("databend-icon-v2",s,a),style:h()(h()({},i),{},{fontSize:v+"px"})})})},tn=st,at=l(81763),ue=l(18587);function re(){var c=null;(0,at.Z)(function(){c&&c()});function n(s){var a,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"body";c=(0,ue.ak)((a=document)===null||a===void 0?void 0:a.querySelector(u),function(){s.resize({animation:{duration:300,easing:"cubicInOut"}})})}function t(s){var a,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"body";c=(0,ue.ak)((a=document)===null||a===void 0?void 0:a.querySelector(u),function(){s()})}return{reshape:n,reshapeDOM:t}}var ot=function(n){var t=n.text,s=t===void 0?"0":t,a=n.roundColor,u=a===void 0?"#1C82F2":a,i=n.width,d=i===void 0?12:i,v=n.className,p=n.textClass,x=n.gap,C=x===void 0?8:x,b=n.wrapClass,R=b===void 0?"db-simple-legend-default":b,L=n.isInnerHtml,$=L===void 0?!1:L;return(0,e.jsxs)("span",{className:R,style:{gap:C+"px"},children:[(0,e.jsx)("span",{style:{backgroundColor:u,width:d+"px",height:d+"px",borderRadius:"50%",minWidth:"1px"},className:(0,B.Z)("db-simple-inline-block",v)}),s!==void 0&&s!==""&&(0,e.jsx)(e.Fragment,{children:$?(0,e.jsx)("span",{style:{flex:1},className:(0,B.Z)("db-simple-legend-text",p),dangerouslySetInnerHTML:{__html:s}}):(0,e.jsx)("span",{style:{flex:1},className:(0,B.Z)("db-simple-legend-text",p),children:s})})]})},_e=ot,lt=l(19632),kn=l.n(lt),ct=l(9824),ut=l(35322),de="OutputRows";function ie(c,n,t,s,a){return[["M",c+a,n],["l",t-a*2,0],["a",a,a,0,0,1,a,a],["l",0,s-a*2],["a",a,a,0,0,1,-a,a],["l",-t+a*2,0],["a",a,a,0,0,1,-a,-a],["l",0,-s+a*2],["a",a,a,0,0,1,a,-a],["Z"]]}var rt=[["M",19.0374+2,60],["H",15],["C",10.7909+2,60,11,5.79086+56,11,64],["C",11,10.2091+56,10.7909+2,68,15,68],["H",19.1059+2],["C",17.8458+2,13.9437+56,15.7082+2,15.2309+56,13.2964+2,15.0062+56],["C",2.5+2,70,1,13.5+56,4,7.5+56],["C",-2.5+2,1.00616+56,9.5+2,.5+56,13.2964+2,1.00616+56],["C",15.6724+2,1.00616+56,17.772+2,2.18999+56,19.0374+2,60],["Z"]],_t=[["M",125.5,-18],["L",131.9952,-6.75],["L",119.00481,-6.75],["L",125.5,-18],["Z"],["M",125.5,-1],["L",125.5,-7]];function dt(c){if((c==null?void 0:c.length)<=2)return c;var n=1,t=4.5,s=c.map(function(d){return d._value}).filter(function(d){return d!==void 0}),a=Math.min.apply(Math,kn()(s)),u=Math.max.apply(Math,kn()(s)),i=function(v,p,x,C,b){var R=(v-p)/(x-p);return C+(b-C)*R};return c.forEach(function(d){d._value!==void 0?d.lineWidth=i(d._value,a,u,n,t):d.lineWidth=n}),c}function it(c){var n=-1;c.sort(function(s,a){return Number(a==null?void 0:a.id)-Number(s==null?void 0:s.id)});var t=c==null?void 0:c.map(function(s){var a=s.title,u=s.name,i=s.id,d=s.statisticsDescArray;n===-1&&(n=(d==null?void 0:d.findIndex(function(p){return p._type===de}))||0);var v=d[n]._value;return h()(h()({},s),{},{id:i,outputRows:v,value:{title:((u==null?void 0:u.length)>=26?(u==null?void 0:u.slice(0,26))+"...":u||"  ")+" [".concat(i,"]"),items:[{text:a||"  "}]}})});return t}function ht(c){var n=-1;return c==null?void 0:c.map(function(t){var s=t==null?void 0:t.statisticsDescArray;n===-1&&(n=(s==null?void 0:s.findIndex(function(i){return i._type===de}))||0);var a=s[n]._value,u={source:t==null?void 0:t.parent_id,target:t==null?void 0:t.id};return a<=0?u:h()(h()({},u),{},{value:O(a),_value:a})})}var mt=function(n){var t=n.plainData,s=n.graphSize,a=n.graphSizeHeight,u=n.graphRef,i=n.isLight,d=n.overviewInfoCurrent,v=n.onReady,p=n.queryId,x=p===void 0?"analysis":p,C=function(){var U=u==null?void 0:u.current;U&&(U.fitView(),U.refresh())},b=dt(ht(t)),R={nodes:it(t),edges:b},L={width:s,height:a},$=h()(h()({},L),{},{autoFit:!1,onReady:v,data:R,layout:{rankdir:"TB",ranksepFunc:function(){return 20}},tooltipCfg:{show:!1},toolbarCfg:{show:!0,customContent:function(U){var r=U.zoomIn,W=U.zoomOut;return(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"g-cursor g-box-c",onClick:function(){return C()},children:(0,e.jsx)(tn,{size:16,icon:"databend-icon-quanping1"})}),(0,e.jsx)("span",{className:"g-cursor g-box-c",onClick:W,children:(0,e.jsx)(tn,{size:16,icon:"databend-icon-minus-bold"})}),(0,e.jsx)("span",{className:"g-cursor g-box-c",onClick:r,children:(0,e.jsx)(tn,{size:16,icon:"databend-icon-jia"})}),(0,e.jsx)("span",{className:"g-cursor g-box-c",onClick:function(){var H;return u==null||(H=u.current)===null||H===void 0?void 0:H.downloadFullImage("databend-profile-".concat(x),"image/png")},children:(0,e.jsx)(tn,{size:16,icon:"databend-icon-xiazai_download-four"})})]})}},nodeCfg:{padding:10,size:[250,40],title:{autoEllipsis:!0,containerStyle:{fill:"transparent"},style:function(U){var r;return{fontWeight:600,fill:U!=null&&(r=U.errors)!==null&&r!==void 0&&r.length?"#fff":i?"#000":"#fff"}}},anchorPoints:[[.5,0],[.5,1]],style:function(U){var r;return{radius:5,fill:U!=null&&(r=U.errors)!==null&&r!==void 0&&r.length?"#f73920":i?"#fff":"#101",stroke:i?"#ccc":"#fff",filter:i?"drop-shadow(2px 2px 2px rgba(204, 204, 204, .3))":"drop-shadow(2px 3px 2px rgba(255, 255, 255, .2))"}},nodeStateStyles:{highlight:{stroke:"#2c91ff",lineWidth:2},hover:{stroke:"#2c91ff",lineWidth:2}},customContent:function(U,r,W){var Z,H,A,sn,E,an,pn=W.startX,dn=W.startY,qn=W.width,un=U.text;un=(Z=un)===null||Z===void 0?void 0:Z.replace(/\n/g," ");var fn=230,vn=(H=un)===null||H===void 0?void 0:H.length,F=r==null||(A=r.cfg)===null||A===void 0||(A=A.item)===null||A===void 0||(A=A._cfg)===null||A===void 0?void 0:A.model,bn=(F==null?void 0:F.totalTime)/(((sn=d.current)===null||sn===void 0?void 0:sn.totalTime)||1),jn=F==null||(E=F.errors)===null||E===void 0?void 0:E.length,Gn=F==null?void 0:F.parent_id,hn=r.addShape("text",{attrs:{textBaseline:"top",x:pn,y:dn,text:un,fill:jn?"rgba(255,255,255,0.8)":"#75767a",textAlign:"left"},name:"text-".concat(Math.random())}),Pn=hn.getBBox().width;if(vn>26&&Pn>qn){var Q,$n=((Q=un)===null||Q===void 0?void 0:Q.slice(0,Math.floor(qn/Pn*vn-3)))+"...";hn.attr("text",$n)}var yn=(an=hn==null?void 0:hn.getBBox().height)!==null&&an!==void 0?an:0,z=8,Ln=4,Y=bn*fn,Jn=ie(pn,dn+yn+10,fn,z,Ln);r.addShape("path",{attrs:{path:Jn,fill:"#f2f2f2"},name:"progress-bg-".concat(Math.random())});var Mn=ie(pn,dn+yn+10,Y,z,Ln);if(r.addShape("path",{attrs:{path:Mn,fill:Y<=0?"rgba(0,0,0,0)":"rgb(1, 117, 246)"},name:"progress-fg-".concat(Math.random())}),Y>0&&Y<9&&r.addShape("path",{attrs:{path:rt,fill:jn?"#f73920":i?"#fff":"#101"},name:"circle-path-bg-".concat(Math.random())}),Gn==="null"){var gn=b==null?void 0:b.find(function(Cn){return(Cn==null?void 0:Cn.source)==="null"});r.addShape("path",{attrs:{path:_t,fill:"#ccc",stroke:"#ccc",lineWidth:(gn==null?void 0:gn.lineWidth)||1},name:"percentage-output-text-".concat(Math.random())});var xn=O(F==null?void 0:F.outputRows);r.addShape("text",{attrs:{textBaseline:"top",x:125+Tn(xn)/2,y:-30,text:xn,fill:i?"rgba(12, 22, 43, 0.6)":"#fff",fontWeight:"bold",fontSize:12,textAlign:"right"},name:"percentage-output-text"})}var Kn=bn>0?"".concat((bn*100).toFixed(1),"%"):"0%";return r.addShape("text",{attrs:{textBaseline:"top",x:pn+qn,y:dn-27,text:Kn,fill:jn?"#fff":i?"#000":"#fff",fontSize:11,textAlign:"right"},name:"percentage-text-".concat(Math.random())}),Math.max(yn,z)}},edgeCfg:{type:"cubic-vertical",endArrow:!1,style:function(U){var r=(U==null?void 0:U.lineWidth)||1;return{lineWidth:r}},label:{style:{fontWeight:600,fill:i?"rgba(12, 22, 43, 0.6)":"#fff"}},startArrow:{type:"triangle"}},graphCfg:{containerStyle:{backgroundColor:"#f0f0f0"}},markerCfg:function(U){var r;return{animate:!0,position:"bottom",show:(r=R.edges.filter(function(W){return W.source===U.id}))===null||r===void 0?void 0:r.length}},behaviors:["drag-canvas","zoom-canvas"]});return(0,e.jsx)(ct.Z,h()({},$))},pt=(0,T.memo)(mt,function(c,n){var t=(0,ut.Z)(c.plainData,n.plainData),s=c.graphSize===n.graphSize,a=c.graphSizeHeight===n.graphSizeHeight,u=c.isLight===n.isLight;return t&&s&&a&&u}),ft=l(9783),he=l.n(ft),me=l(54907),vt=l(94274),bt=l(25968),yt=l(6226),gt=l(63677),xt=["children"],Ct=function(n){var t=n.children,s=Sn()(n,xt);return(0,e.jsx)(V.Z,h()(h()({},s),{},{className:(0,B.Z)(s.className,"db-reset-white-button"),style:h()({gap:"6px"},s==null?void 0:s.style),children:t}))},wt=Ct,Tt=["padding","borderRadius","children","className","isNeedBorder","isJader","onClick","height"],pe=function(n){var t=n.padding,s=n.borderRadius,a=n.children,u=n.className,i=n.isNeedBorder,d=n.isJader,v=n.onClick,p=n.height,x=Sn()(n,Tt),C=t===void 0?[20,20,20,20]:t,b=Array.isArray(C);return(0,e.jsx)("div",h()(h()({onClick:v,className:(0,B.Z)("db-card-wrap-out",u,i&&"db-card-wrap-border",d&&"db-card-wrap-jader"),style:h()(h()({},b?{paddingTop:C[0]+"px",paddingRight:C[1]+"px",paddingBottom:C[2]+"px",paddingLeft:C[3]+"px"}:{padding:t+"px"}),{},{height:p==="auto"?"auto":p+"px",borderRadius:"".concat(s,"px")})},x),{},{children:a}))};pe.defaultProps={padding:[20,20,20,20],borderRadius:6,isNeedBorder:!0,height:"auto",isJader:!1};var Rt=pe,Ut=l(78234),fe=l(64665),ve=l(97369),St=l(49956),kt=l(47008),qt=l(78537),be=l(27067),jt=l(31825),ye=l(35183),Nt=l(11415),ge=l(79016),xe=l(6228);ye.D([St.N,kt.N,qt.N,be.N,jt.N,fe.N,ve.N,xe.N,ge.z]),ye.D([be.N,fe.N,ve.N,xe.N,ge.z]);var Ht=function(n){var t=n.series,s=n.legendData,a=n.xData,u=n.isLight,i=(0,T.useRef)(null),d=re(),v=d.reshape,p=u?"rgba(1, 14, 41, 0.08)":"rgba(255, 255, 255, 0.08)",x=u?"rgba(12, 22, 43, 0.6)":"rgba(249, 249, 249, 0.6)";return(0,Ut.Z)(function(){var C=Nt.S1(i.current),b={tooltip:{trigger:"axis"},legend:{type:"scroll",data:s},grid:{left:"13%",right:"9%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:a,axisLine:{lineStyle:{color:p}},axisLabel:{showMinLabel:!0,showMaxLabel:!0,color:x,margin:8},axisTick:{show:!1}},yAxis:{offset:30,type:"value"},series:t};C.setOption(b),v(C,"body")}),(0,e.jsx)("div",{style:{height:"280px",width:"100%"},ref:i})},At=(0,T.memo)(Ht),Et=["isLight","metricsData"],Pt=me.Z.Panel;function Fn(c){var n,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return c?(n=Object.values(c))===null||n===void 0?void 0:n.sort(function(s,a){return s==null?void 0:s.localeCompare(a)}).join(" "):t||"No labels"}function Lt(c){return c.map(function(n){var t=Object.keys(n.value)[0],s=t==="Histogram",a=t==="Summary",u=s||a;if(!n.labels&&!u)return{name:n.name,columns:[{title:t,key:t,dataIndex:t}],data:[he()({},t,n.value[t])],labels:n.labels?n.labels:null,value:n.value};if(u){var i=s?n.value.Histogram:n.value.Summary,d=[],v=[];return d=i.map(function(b){return s?b.less_than:b.quantile}),v=i.map(function(b){return b.count}),{isChart:!0,name:n.name,_tag:Fn(n.labels,n.name),columns:d,data:[v],labels:n.labels,value:n.value,type:t}}var p=Object.keys(n.labels),x=p.map(function(b){return{title:b,key:b,dataIndex:b}}).concat({title:t,key:t,dataIndex:t}),C=[h()(h()({},n.labels),{},he()({},t,n.value[t]))];return{name:n.name,columns:x,data:C,labels:n.labels,value:n.value}})}function Mt(c){var n={};return c.forEach(function(t){if(!n[t.name])n[t.name]=h()(h()({},t),{},{labelsArr:[h()(h()({},t.labels),{},{_tag:Fn(t.labels,t.name)})]}),delete n[t.name].labels;else if(t!=null&&t.type)n[t.name].data=[].concat(kn()(n[t.name].data),kn()(t.data)),n[t.name].labelsArr.push(h()(h()({},t.labels),{},{_tag:Fn(t.labels,t.name)}));else{var s;(s=n[t.name].data).push.apply(s,kn()(t.data))}}),Object.values(n)}function zt(c){return c==null?void 0:c.map(function(n){return{machine:n[0],data:Mt(Lt(n[1]).sort(function(t,s){if((t==null?void 0:t.name)===(s==null?void 0:s.name)){var a;return s==null||(a=s._tag)===null||a===void 0?void 0:a.localeCompare(t==null?void 0:t._tag)}return 0}).sort(function(t,s){return!(t!=null&&t.type)&&!(s!=null&&s.type)?0:t!=null&&t.type?s!=null&&s.type?t.type.localeCompare(s==null?void 0:s.type):1:-1}))}})}var It=function(n){var t=n.isLight,s=n.metricsData,a=Sn()(n,Et),u=(0,T.useState)(!1),i=k()(u,2),d=i[0],v=i[1],p=(0,T.useState)([]),x=k()(p,2),C=x[0],b=x[1];return(0,T.useEffect)(function(){if(s){var R=Object.entries(s),L=zt(R);b(L)}},[s]),(0,e.jsx)(vt.Z,h()(h()({destroyOnClose:!0,width:"100vw"},a),{},{title:(0,e.jsxs)(en.Z,{children:[(0,e.jsx)("span",{children:a==null?void 0:a.title}),(0,e.jsx)(wt,{onClick:function(){return v(!d)},children:(0,e.jsxs)(en.Z,{size:4,children:[(0,e.jsx)(tn,{size:14,icon:"databend-icon-qiehuan_switch"}),d?"Chart View":"Metrics JSON"]})})]}),children:(0,e.jsx)(e.Fragment,{children:d?(0,e.jsx)(oe,{buttonText:"Metrics",isString:!1,content:JSON.stringify(s)}):(0,e.jsx)(me.Z,{className:"profile-metrics-collapseWrap",expandIconPosition:"start",defaultActiveKey:Array.from({length:(C==null?void 0:C.length)+1},function(R,L){return L}),children:C==null?void 0:C.map(function(R,L){var $,M=R==null||($=R.data)===null||$===void 0?void 0:$.length,U=M%2!==0;return(0,e.jsx)(Pt,{header:(0,e.jsxs)("div",{className:"profile-metrics-header",children:["Machine ",L+1,":",R==null?void 0:R.machine]}),children:(0,e.jsx)(bt.Z,{gutter:[16,16],className:"profile-metrics-row",children:R==null?void 0:R.data.map(function(r,W){var Z,H;return(0,T.createElement)(yt.Z,{xl:12,xxl:12,lg:24,md:24,sm:24,xs:24,className:"profile-metrics-col",span:U&&M-1===W?24:12,key:W},(0,e.jsx)("div",{className:"profile-metrics-name",children:r==null?void 0:r.name}),r!=null&&r.data?(0,e.jsx)(e.Fragment,{children:r!=null&&r.type?(0,e.jsx)(At,{isLight:t,series:r==null||(Z=r.data)===null||Z===void 0?void 0:Z.map(function(A,sn){var E;return{type:"bar",data:A,name:r==null||(E=r.labelsArr[sn])===null||E===void 0?void 0:E._tag}}),legendData:r==null||(H=r.labelsArr)===null||H===void 0?void 0:H.map(function(A){return A==null?void 0:A._tag}),xData:r==null?void 0:r.columns}):(0,e.jsx)(gt.Z,{className:"profile-metrics-table",pagination:!1,dataSource:r==null?void 0:r.data,columns:r==null?void 0:r.columns},"key")}):(0,e.jsx)(Rt,{children:JSON.stringify(r==null?void 0:r.value)}))})})},L)})})})}))},Dt=It,Ot="CpuTime",Wt="WaitTime";function Bt(c){return c==null?void 0:c.map(function(n){var t,s,a,u=Object.keys(n)[0];return{_errorType:u,message:((t=n[u])===null||t===void 0?void 0:t.message)||"",detail:((s=n[u])===null||s===void 0?void 0:s.detail)||"",backtrace:((a=n[u])===null||a===void 0||(a=a.backtrace)===null||a===void 0||(a=a.build_id)===null||a===void 0?void 0:a.join(","))||""}})}function Zt(c,n){return c==="Bytes"?q(n):c==="Rows"||c==="Count"?Bn(n):c==="MillisSeconds"?Rn(n):c==="NanoSeconds"?Rn(n/1e6):n}var Ft=function(n){var t,s,a,u,i=n.profileRef,d=n.queryDuration,v=n.queryId,p=v===void 0?"analysis":v,x=n.outValue,C=n.countShow,b=n.offsetWidth,R=b===void 0?400:b,L=n.offsetHeight,$=L===void 0?150:L,M=n.showTextArea,U=M===void 0?!0:M,r=n.initLoading,W=r===void 0?!1:r,Z=n.isNeedMetrics,H=Z===void 0?!1:Z,A=n.isDemo,sn=A===void 0?!1:A,E=n.isLight,an=E===void 0?!0:E,pn=(0,D.Z)(0),dn=k()(pn,2),qn=dn[0],un=dn[1],fn=(0,T.useRef)(null),vn=(0,T.useRef)(null),F=(0,D.Z)(window.innerHeight-150),bn=k()(F,2),jn=bn[0],Gn=bn[1],hn=re(),Pn=hn.reshapeDOM,Q=(0,T.useRef)(void 0),$n=(0,D.Z)([]),yn=k()($n,2),z=yn[0],Ln=yn[1],Y=(0,T.useRef)(void 0),Jn=(0,D.Z)(!0),Mn=k()(Jn,2),gn=Mn[0],xn=Mn[1],Kn=(0,D.Z)(""),Cn=k()(Kn,2),we=Cn[0],Te=Cn[1],Vt=(0,D.Z)([]),Re=k()(Vt,2),on=Re[0],Qt=Re[1],Yt=(0,D.Z)([]),Ue=k()(Yt,2),wn=Ue[0],ns=Ue[1],es=(0,D.Z)(!1),Se=k()(es,2),ts=Se[0],ke=Se[1],ss=(0,D.Z)({clientX:0,clientY:0,show:!1,text:""}),qe=k()(ss,2),rn=qe[0],Xn=qe[1],as=(0,D.Z)({cpuTime:0,waitTime:0,isTotalBigerZero:!1,totalTime:0,totalTimePercent:"0%",labels:void 0,statisticsDescArray:[],metrics:null}),je=k()(as,2),_=je[0],Vn=je[1];function os(o){var y,w,g,f=o==null?void 0:o.profiles,j=o==null?void 0:o.statistics_desc,S=(y=j[Ot])===null||y===void 0?void 0:y.index,N=(w=j[Wt])===null||w===void 0?void 0:w.index,I=0,ln=0,Nn=[];f==null||f.forEach(function(m){m.id=String(m.id),m.parent_id=String(m.parent_id);var cn=m==null?void 0:m.errors,Yn=m==null?void 0:m.statistics[S],ne=m==null?void 0:m.statistics[N];m.totalTime=Yn+ne,m.cpuTime=Yn,m.waitTime=ne,I+=Yn,ln+=ne,m.errors=(cn==null?void 0:cn.length)>0?Bt(m==null?void 0:m.errors):[],m.statisticsDescArray=Object.entries(j).map(function(cs){var Pe=k()(cs,2),us=Pe[0],P=Pe[1];return{_type:us,desc:P==null?void 0:P.desc,display_name:(P==null?void 0:P.display_name)||(P==null?void 0:P.displayName),index:P==null?void 0:P.index,unit:P.unit,plain_statistics:P==null?void 0:P.plain_statistics,_value:m.statistics[P==null?void 0:P.index]}})});var _n=I+ln;f==null||f.forEach(function(m){m.totalTimePercent=Un(m==null?void 0:m.totalTime,_n),m.cpuTimePercent=Un(m==null?void 0:m.cpuTime,m.totalTime),m.waitTimePercent=Un(m==null?void 0:m.waitTime,m.totalTime)}),Ln(f),Qt((g=(0,Ke.Z)(f))===null||g===void 0||(g=g.filter(function(m){return parseFloat(m.totalTimePercent)>.09}))===null||g===void 0?void 0:g.sort(function(m,cn){return cn.totalTime-m.totalTime}));var Hn=Un(I,_n),Qn=Un(ln,_n),Dn={cpuTime:I,waitTime:ln,totalTime:_n,totalTimePercent:"100%",cpuTimePercent:Hn,waitTimePercent:Qn,statisticsDescArray:Nn,isNode:!1,errors:[]};Y.current=Dn,Vn(Dn)}function ls(){var o=Q==null?void 0:Q.current;o&&(o==null||o.fitView())}var zn=function(){i&&un(sn?700:(i==null?void 0:i.offsetWidth)-R),Gn(window.innerHeight-$)};(0,T.useEffect)(function(){if(x)try{os(x)}catch(o){ee.ZP.destroy(),ee.ZP.warning("Incorrect data")}},[C,x]),(0,T.useEffect)(function(){W&&Q.current&&ls()},[W]),(0,T.useEffect)(function(){z!=null&&z.length&&zn()},[z,U]),(0,T.useEffect)(function(){var o,y=_==null||(o=_.statisticsDescArray)===null||o===void 0?void 0:o.filter(function(w){return w._value>0});ns(y)},[_==null?void 0:_.statisticsDescArray]),(0,T.useEffect)(function(){zn(),Pn(function(){zn()})},[]);function Ne(o){var y=o.totalTime,w=o.totalTimePercent,g=o.cpuTime,f=o.waitTime,j=o.cpuTimePercent,S=o.waitTimePercent,N=o.id,I=o.isNode,ln=o.labels,Nn=o.statisticsDescArray,_n=o.name,Hn=o.errors;Te(N),Vn({cpuTime:g,waitTime:f,totalTime:y,totalTimePercent:w,cpuTimePercent:j,waitTimePercent:S,labels:ln,statisticsDescArray:Nn,isNode:I,name:_n,id:N,metrics:o==null?void 0:o.metrics,errors:Hn})}function He(o){return o.getNodes()}function Ae(o,y){o.setItemState(y,"highlight",!0)}function Ee(o){He(o).forEach(function(y){o.clearItemStates(y)})}function In(){Xn({clientX:0,clientY:0,show:!1,text:""})}return(0,e.jsxs)(e.Fragment,{children:[(rn==null?void 0:rn.show)&&(0,e.jsx)(ze,{position:{x:rn==null?void 0:rn.clientX,y:rn.clientY},title:rn.text}),(0,e.jsxs)("div",{ref:vn,className:"profile-index-container",children:[(z==null?void 0:z.length)>0&&(0,e.jsxs)("div",{className:"profile-index-details-info",children:[(on==null?void 0:on.length)>0&&(0,e.jsxs)("div",{className:"profile-index-top-ranking",children:[(0,e.jsxs)("div",{className:"profile-indx-most-expensive-nodes",children:[" ","Most Expensive Nodes",(0,e.jsxs)("span",{className:"profile-index-ranking-length",children:[" ","(",on==null?void 0:on.length," of ",z==null?void 0:z.length,")"]})]}),(0,e.jsx)("div",{style:{marginTop:"8px"},children:on==null?void 0:on.map(function(o,y){return(0,e.jsxs)("div",{onClick:function(){var g,f,j=o==null?void 0:o.id;if(we!==j){Ne(h()(h()({},o),{},{isNode:!0})),xn(!1);var S=Q.current,N=S==null?void 0:S.cfg.nodes,I=N==null?void 0:N.find(function(cn){return(cn==null?void 0:cn._cfg.id)===j}),ln=S==null?void 0:S.getZoom(),Nn=I==null||(g=I._cfg)===null||g===void 0||(g=g.bboxCache)===null||g===void 0?void 0:g.x,_n=I==null||(f=I._cfg)===null||f===void 0||(f=f.bboxCache)===null||f===void 0?void 0:f.y,Hn=S==null?void 0:S.getWidth(),Qn=S==null?void 0:S.getHeight(),Dn=Hn/2-Nn*ln,m=Qn/2-_n*ln+20;Ee(S),Ae(S,I),(N==null?void 0:N.length)>1&&S.moveTo(Dn,m)}},className:(0,B.Z)("profile-index-top-item-style",we===o.id&&"profile-index-top-active-item-style"),children:[(0,e.jsxs)("span",{children:[o.name," [",o.id,"]"]}),(0,e.jsx)("span",{className:"profile-index-top-item-time",children:o.totalTimePercent})]},y)})})]}),(0,e.jsxs)("div",{className:(0,B.Z)("profile-index-top-ranking","profile-common-styles-pm"),children:[(0,e.jsxs)("div",{className:"profile-common-styles-few g-box-center-between",children:[(0,e.jsxs)("div",{children:["Profile Overview",(0,e.jsxs)("span",{className:"profile-index-color-text-2",children:[" ",gn&&"(Finished)"]})]}),!gn&&H&&(0,e.jsx)(Zn.Z,{title:_!=null&&_.metrics?void 0:"No Metrics",children:(0,e.jsx)(V.Z,{disabled:!(_!=null&&_.metrics),onClick:function(){return ke(!0)},type:"primary",size:"small",children:(0,e.jsxs)(en.Z,{size:4,children:[_!=null&&_.metrics?(0,e.jsx)(tn,{icon:"databend-icon-yulan-dakai_preview-open"}):(0,e.jsx)(tn,{icon:"databend-icon-yulan-guanbi_preview-close-one"}),"Metrics"]})})})]}),(0,e.jsxs)("div",{className:"g-mt-8",children:[_.isNode?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"g-t-right",children:_==null?void 0:_.totalTimePercent}),(0,e.jsx)(Je,{data:[{color:"rgb(28, 130, 242)",percent:parseFloat(_.cpuTimePercent)},{color:"rgb(255, 152, 0)",percent:parseFloat(_.waitTimePercent)}]})]}):(0,e.jsxs)("div",{className:"profile-common-styles-bcpc",children:[(0,e.jsx)("span",{children:"Total Execution Time"}),(0,e.jsxs)("span",{className:"profile-index-color-text-1",children:[(0,e.jsxs)("span",{className:"profile-index-color-text-2",children:["(",Rn(x?(_==null?void 0:_.totalTime)/1e6:d),")"]})," ",_==null?void 0:_.totalTimePercent]})]}),(0,e.jsxs)("div",{className:"profile-common-styles-bcpc",children:[(0,e.jsx)(_e,{width:5,text:"CPU Time",textClass:"profile-index-color-text-2"}),(0,e.jsx)("span",{className:"profile-index-color-text-1",children:_==null?void 0:_.cpuTimePercent})]}),(0,e.jsxs)("div",{className:"profile-common-styles-bcpc",children:[(0,e.jsx)(_e,{width:5,roundColor:"rgb(255, 152, 0)",text:"I/O Time",textClass:"profile-index-color-text-2"}),(0,e.jsx)("span",{className:"profile-index-color-text-1",children:_==null?void 0:_.waitTimePercent})]})]})]}),(_==null||(t=_.errors)===null||t===void 0?void 0:t.length)>0&&(0,e.jsxs)("div",{className:(0,B.Z)("profile-index-top-ranking","profile-index-top-ranking-errors","profile-common-styles-pm"),children:[(0,e.jsx)("div",{className:"profile-common-styles-few g-color-text-danger",children:"Errors"}),_==null||(s=_.errors)===null||s===void 0?void 0:s.map(function(o,y){return(0,e.jsxs)("div",{className:"g-mt-10",children:[(0,e.jsx)("div",{className:"profile-index-color-text-1",children:o==null?void 0:o._errorType}),(0,e.jsxs)("div",{className:"profile-common-styles-gbp profile-index-color-text-2",children:[(0,e.jsxs)("div",{className:"g-class-ellipsis",children:["message:",(0,e.jsx)(ce,{placement:"rightTop",destroyTooltipOnHide:!0,content:o==null?void 0:o.message,buttonText:"message",children:o==null?void 0:o.message})]}),(0,e.jsxs)("div",{className:"g-class-ellipsis",children:["detail:",(0,e.jsx)(Zn.Z,{destroyTooltipOnHide:!0,title:o==null?void 0:o.detail,children:o==null?void 0:o.detail})]}),(0,e.jsxs)("div",{className:"g-class-ellipsis",children:["backtrace:",(0,e.jsx)(ce,{placement:"rightTop",destroyTooltipOnHide:!0,content:o==null?void 0:o.backtrace,buttonText:"backtrace",children:o==null?void 0:o.backtrace})]})]})]},y)})]}),(wn==null?void 0:wn.length)>0&&(0,e.jsxs)("div",{className:(0,B.Z)("profile-index-top-ranking","profile-common-styles-pm"),children:[(0,e.jsx)("div",{className:"profile-common-styles-few",children:"Statistics"}),(0,e.jsx)("div",{className:"g-mt-8",children:wn==null?void 0:wn.map(function(o,y){return(0,e.jsxs)("div",{className:"profile-common-styles-bcpc",children:[(0,e.jsx)("span",{children:o==null?void 0:o.display_name}),(0,e.jsx)("span",{className:"profile-index-color-text-1",children:Zt(o.unit,o==null?void 0:o._value)})]},y)})})]}),(_==null||(a=_.labels)===null||a===void 0?void 0:a.length)>0&&(0,e.jsxs)("div",{className:(0,B.Z)("profile-index-top-ranking","profile-common-styles-pm"),children:[(0,e.jsx)("div",{className:"profile-common-styles-few",children:"Attributes"}),_==null||(u=_.labels)===null||u===void 0?void 0:u.map(function(o,y){var w;return(0,e.jsxs)("div",{className:"g-mt-10",children:[(0,e.jsx)("div",{className:"profile-index-color-text-1",children:o==null?void 0:o.name}),(0,e.jsx)("div",{children:(0,e.jsx)("div",{className:"profile-common-styles-gbp profile-index-color-text-2",children:o==null||(w=o.value)===null||w===void 0?void 0:w.map(function(g){return(0,e.jsx)("div",{style:{wordWrap:"break-word"},children:g},g)})})})]},y)})]})]}),W?(0,e.jsx)("div",{className:"g-box-c",style:{height:"700px"},children:(0,e.jsx)(te,{})}):(0,e.jsx)(e.Fragment,{children:(z==null?void 0:z.length)>0?(0,e.jsx)(pt,{queryId:p,plainData:z,graphSize:qn,graphSizeHeight:jn,graphRef:Q,isLight:an,handleResize:zn,overviewInfoCurrent:Y,onReady:function(y){Q.current=y,y.setMaxZoom(2),y.on("node:click",function(w){xn(!1);var g=w.item._cfg.model;Ne(h()(h()({},g),{},{isNode:!0}));var f=He(y),j=w.item._cfg.id,S=f==null?void 0:f.find(function(N){return(N==null?void 0:N._cfg.id)===j});f==null||f.filter(function(N){return N._cfg.id!==j}).forEach(function(N){y.clearItemStates(N)}),Ae(y,S)}),y.on("node:mouseleave",function(){fn.current||(fn.current=document.getElementsByTagName("canvas")[0]),fn.current.style.cursor="move",In()}),y.on("node:mouseover",function(w){var g,f=w==null||(g=w.target)===null||g===void 0||(g=g.cfg)===null||g===void 0?void 0:g.name;if(f!=null&&f.includes("percentage-output-text")){var j,S=w.clientX,N=w.clientY,I=w==null||(j=w.item)===null||j===void 0||(j=j._cfg)===null||j===void 0||(j=j.model)===null||j===void 0?void 0:j.outputRows;Xn({clientX:S-70,clientY:N-52,show:!0,text:"Output Rows: ".concat(Bn(I))})}else In()}),y.on("canvas:click",function(){Te(""),xn(!0),Vn(Y==null?void 0:Y.current),Ee(y)}),y.on("canvas:dragstart",function(){vn.current.style.userSelect="none"}),y.on("canvas:dragend",function(){vn.current.style.userSelect="unset"}),y.on("edge:mouseover",function(w){var g,f,j=w==null||(g=w.target)===null||g===void 0||(g=g.cfg)===null||g===void 0?void 0:g.type,S=w==null||(f=w.item)===null||f===void 0||(f=f._cfg)===null||f===void 0||(f=f.model)===null||f===void 0?void 0:f._value,N=w.clientX,I=w.clientY;j==="text"?Xn({clientX:N-40,clientY:I-50,show:!0,text:"Rows: ".concat(Bn(S))}):In()}),y.on("edge:mouseleave",function(){In()})}}):(0,e.jsx)("div",{style:{minHeight:"700px"},children:(0,e.jsx)(Ge,{title:"No Profile",paddingTop:"150px",subTitle:(0,e.jsxs)("div",{children:["Some queries, such as those with"," ",(0,e.jsx)("span",{style:{fontWeight:700},children:"USE"})," and"," ",(0,e.jsx)("span",{style:{fontWeight:700},children:"DESCRIBE"})," ","statements, have no query profile."]}),TopIcon:(0,e.jsx)(tn,{icon:"databend-icon-zuzhijiagou"})})})})]}),(0,e.jsx)(Dt,{isLight:an,metricsData:_==null?void 0:_.metrics,title:"Metrics Details: ".concat(_==null?void 0:_.name,"[").concat(_==null?void 0:_.id,"]  ").concat(_==null?void 0:_.totalTimePercent),onClose:function(){return ke(!1)},visible:ts})]})},Ce=(0,T.memo)(Ft),Gt=l(92688),$t=l(55753),Jt=Gt.Z.TextArea,Kt=function(n){var t,s=n.isDemo,a=s===void 0?!1:s,u=n.isNeedMetrics,i=u===void 0?!1:u,d=(0,T.useState)(""),v=k()(d,2),p=v[0],x=v[1],C=(0,T.useState)(""),b=k()(C,2),R=b[0],L=b[1],$=(0,T.useState)(0),M=k()($,2),U=M[0],r=M[1],W=(0,T.useState)(!1),Z=k()(W,2),H=Z[0],A=Z[1];function sn(){r(U+1);try{var E;L((E=JSON.parse(p))===null||E===void 0?void 0:E.query_id)}catch(an){}}return(0,e.jsxs)("div",{className:"g-pa-24 g-align-s site-layout-right",style:{gap:"12px"},children:[(0,e.jsxs)(en.Z,{size:12,className:"g-pl-10 g-pr",direction:"vertical",children:[!H&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Jt,{placeholder:"\u8BF7\u628A\u4F60\u751F\u6210\u7684 profile \u65E5\u5FD7json\u7C98\u8FDB\u6765",className:"g-border-radius-middle g-border g-color-bg-1",value:p,onChange:function(an){x(an.target.value)},style:{width:"320px",height:"calc(100vh - 100px)"}}),(0,e.jsxs)(en.Z,{className:"g-box-center-between",children:[(0,e.jsxs)(en.Z,{children:[(0,e.jsx)(V.Z,{type:"link",href:"/",children:"Back"}),(0,e.jsx)(V.Z,{type:"dashed",onClick:function(){x($t.DEMO),sn()},children:"Demo"})]}),(0,e.jsxs)(en.Z,{children:[(0,e.jsx)(V.Z,{disabled:!p,type:"primary",onClick:function(){return r(U+1)},children:"Show"}),(0,e.jsx)(V.Z,{onClick:function(){x("")},children:"Clear"})]})]})]}),(0,e.jsx)(V.Z,{style:{position:"fixed",bottom:"80px",left:"10px",zIndex:10},type:"primary",onClick:function(){A(!H)},icon:(0,e.jsx)(tn,{icon:H?"databend-icon-zhankai_expand-left":"databend-icon-zhankai_expand-right"})})]}),(0,e.jsx)("div",{className:"g-pa-6 g-color-bg-1 g-box-flex g-border-radius-middle",children:(0,e.jsx)(Ce,{offsetWidth:a?H?900:1200:H?100:695,isNeedMetrics:i,offsetHeight:60,countShow:U,outValue:p&&Le(p)?JSON.parse(p):"",showTextArea:H,queryId:R,queryDuration:0,profileRef:(t=document)===null||t===void 0?void 0:t.body})})]})},Xt=Kt},14633:function(An,G,l){l.r(G),l.d(G,{texts:function(){return h}});var mn=l(97753);const h=[{value:`outValue?: JSON;
pileRef?: any;
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

`,paraId:0,tocIndex:2}]},45760:function(An,G){G.Z=`export const DEMO = \`{
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
