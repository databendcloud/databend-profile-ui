"use strict";(self.webpackChunkdatabend_profile_ui=self.webpackChunkdatabend_profile_ui||[]).push([[152],{25840:function(Mn,$,o){o.r($),o.d($,{demos:function(){return Kn}});var gn=o(15009),i=o.n(gn),Jn=o(99289),q=o.n(Jn),z=o(67294),B=o(97753),S=o(61712),zn=o(55753),Kn={"queryprofile-demo-0":{component:z.memo(z.lazy(q()(i()().mark(function sn(){var V,Q,Y,W;return i()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Promise.resolve().then(o.bind(o,61712));case 2:return V=j.sent,Q=V.QueryProfile,j.next=6,Promise.resolve().then(o.bind(o,55753));case 6:return Y=j.sent,W=Y.DEMO,j.abrupt("return",{default:function(){return z.createElement(Q,{isDemo:!0,outValue:JSON.parse(W),profileRef:"body"})}});case 9:case"end":return j.stop()}},sn)})))),asset:{type:"BLOCK",id:"queryprofile-demo-0",refAtomIds:["QueryProfile"],dependencies:{"index.jsx":{type:"FILE",value:`import { QueryProfile } from 'databend-profile-ui';
import { DEMO } from './demo';

export default () => (
  <QueryProfile isDemo={true} outValue={JSON.parse(DEMO)} profileRef={'body'} />
);`},"databend-profile-ui":{type:"NPM",value:"0.0.44"},"./demo.ts":{type:"FILE",value:o(45760).Z}},entry:"index.jsx"},context:{"./demo.ts":zn,"databend-profile-ui":S,"/home/runner/work/databend-profile-ui/databend-profile-ui/src/QueryProfile/demo.ts":zn},renderOpts:{compile:function(){var sn=q()(i()().mark(function Q(){var Y,W=arguments;return i()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,o.e(335).then(o.bind(o,37335));case 2:return j.abrupt("return",(Y=j.sent).default.apply(Y,W));case 3:case"end":return j.stop()}},Q)}));function V(){return sn.apply(this,arguments)}return V}()}},"queryprofile-demo-1":{component:z.memo(z.lazy(q()(i()().mark(function sn(){var V,Q;return i()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,Promise.resolve().then(o.bind(o,61712));case 2:return V=W.sent,Q=V.TestProfile,W.abrupt("return",{default:function(){return z.createElement(Q,{isDemo:!0})}});case 5:case"end":return W.stop()}},sn)})))),asset:{type:"BLOCK",id:"queryprofile-demo-1",refAtomIds:["QueryProfile"],dependencies:{"index.jsx":{type:"FILE",value:`import { TestProfile } from 'databend-profile-ui';

export default () => <TestProfile isDemo />;`},"databend-profile-ui":{type:"NPM",value:"0.0.44"}},entry:"index.jsx"},context:{"databend-profile-ui":S},renderOpts:{compile:function(){var sn=q()(i()().mark(function Q(){var Y,W=arguments;return i()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,o.e(335).then(o.bind(o,37335));case 2:return j.abrupt("return",(Y=j.sent).default.apply(Y,W));case 3:case"end":return j.stop()}},Q)}));function V(){return sn.apply(this,arguments)}return V}()}}}},55753:function(Mn,$,o){o.r($),o.d($,{DEMO:function(){return gn}});var gn=`{
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
    }`},61712:function(Mn,$,o){o.r($),o.d($,{DatabendJson:function(){return Ce},QueryProfile:function(){return je},TestProfile:function(){return fs}});var gn=o(97857),i=o.n(gn),Jn=o(5574),q=o.n(Jn),z=o(92652),B=o(90512),S=o(67294),zn=o(92077),Kn=o.n(zn),sn=o(79830),V=o(47539),Q=o(29879),Y=o.n(Q),W=o(27885);function xn(c){var n;return c<=999?c:(n=Kn()(c).format("0.0a"))===null||n===void 0?void 0:n.toUpperCase()}function j(c){var n=document.createElement("div");n.style.position="absolute",n.style.whiteSpace="nowrap",n.style.fontSize="12px",n.style.visibility="hidden",n.textContent=c,document.body.appendChild(n);var t=n.offsetWidth;return document.body.removeChild(n),t}var ue=function(n){return(0,sn.format)(n,{thousandsSeparator:","})},In=function(n){return n!==void 0?(0,V.Z)(Number(n)||0):"0ms"},Xn=function(n){return Y()(n||0)},Hs=function(n){if(n<=60)return n.toFixed(0)+"s";var t=Math.floor(n/60),s=n-t*60;return t+"m"+(s>=1?s.toFixed(0)+"s":"")};function Rn(c,n){return n<=0?"0%":(c/n*100).toFixed(1)+"%"}function Ge(c){try{return JSON.parse(c),!0}catch(n){return!1}}function Je(c){var n=W.iv(c),t=btoa(String.fromCharCode.apply(null,n)),s=t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");return s}function Ke(c){for(var n,t,s=(n=c==null||(t=c.replace(/-/g,"+"))===null||t===void 0?void 0:t.replace(/_/g,"/"))!==null&&n!==void 0?n:"",a=atob(s),u=new Uint8Array(a.length),d=0;d<a.length;d++)u[d]=a.charCodeAt(d);var _=W.ec(u,{to:"string"});return _}function Xe(c){var n=window.location.search.match(new RegExp("[?&]".concat(c,"=([^&]*)")));return n?decodeURIComponent(n[1]):null}var Vn=o(84573),Qn=o(57607),nn=o(11889),en=o(26713),e=o(85893),Ve=function(n){var t=n.position,s=n.title;return(0,e.jsx)("div",{style:{left:t.x+"px",top:t.y+"px"},className:(0,B.Z)("databend-self-tooltip"),children:s})},Qe=Ve,Ye=o(13769),Un=o.n(Ye),nt=o(50888),et=o(11382),tt=["className","children"],st=(0,e.jsx)(nt.Z,{style:{fontSize:24},spin:!0}),at=function(n){var t=n.className,s=n.children,a=Un()(n,tt);return(0,e.jsx)(et.Z,i()(i()({style:{zIndex:2e3},className:t},a),{},{indicator:st,children:s}))},re=at,ot=function(n){var t=n.onButtonClick,s=n.title,a=n.subTitle,u=n.buttonText,d=n.buttonArea,_=n.loading,x=_===void 0?!1:_,v=n.width,R=v===void 0?"360px":v,T=n.paddingTop,C=T===void 0?"66px":T,b=n.TopIcon,N=a||"There is no related resource, you can try to refresh or create a new resource";return(0,e.jsx)(re,{spinning:x,children:(0,e.jsx)("div",{className:"profile-no-result-with-action",style:{paddingTop:C},children:(0,e.jsx)("div",{style:{width:R},className:"profile-no-result-with-action-wrap",children:(0,e.jsxs)(en.Z,{direction:"vertical",className:"profile-no-result-with-action-content",size:12,children:[b&&(0,e.jsx)(nn.Z,{className:"pointer-events-none",icon:b}),(0,e.jsx)("div",{className:"profile-no-result-with-action-title",children:s}),a!==null&&(0,e.jsx)("div",{className:"profile-no-result-with-action-sub-title",children:N}),d?(0,e.jsx)(e.Fragment,{children:d}):(0,e.jsx)(e.Fragment,{children:u&&(0,e.jsx)(nn.Z,{onClick:function(X){return t&&t(X)},type:"primary",children:u})})]})})})})},lt=(0,S.memo)(ot),ct=function(n){var t=n.data,s=(0,S.useState)(""),a=q()(s,2),u=a[0],d=a[1];return(0,S.useEffect)(function(){if(t!=null&&t.length){var _="linear-gradient(90deg",x=0;t.forEach(function(v){_+=", ".concat(v.color," ").concat(x,"%"),x+=v.percent,_+=", ".concat(v.color," ").concat(x,"%")}),_+=")",d(_)}},[t]),(0,e.jsx)(e.Fragment,{children:u&&(0,e.jsx)("div",{style:{height:"8px",borderRadius:"4px",backgroundImage:u}})})},ut=(0,S.memo)(ct),rt=o(44107),_t={errorTip:"kCjZdetPcq0VpgDgIYRf"},dt=o(42481),it=o(56986),ht=o(20640),_e=o.n(ht),mt=function(n){var t=n.containerRef,s=n.className,a=n.copyText,u="Copy",d="Copied",_=(0,S.useState)(u),x=q()(_,2),v=x[0],R=x[1],T=function(){if(R(d),a)_e()(a);else if(t){var b;_e()(t==null||(b=t.current)===null||b===void 0?void 0:b.innerText)}};return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(nn.Z,{onMouseLeave:function(){return R(u)},onClick:function(){return T()},className:(0,B.Z)(s),type:"primary",children:v})})},pt=(0,S.memo)(mt),de=function(n){var t=n.content,s=n.buttonText,a=n.isString,u=n.height,d=n.copyText,_=n.CustomArea,x=n.isBreakLine,v=(0,S.useRef)(null),R=a?t:JSON.stringify(JSON.parse(t),null,2);return(0,e.jsxs)("div",{style:{height:u+"px"},className:"db-code-content-container",children:[s&&(0,e.jsx)(nn.Z,{className:"db-code-content-button-text",style:{top:0,left:"20px",borderTopLeftRadius:0,borderTopRightRadius:0},type:"primary",children:s}),(0,e.jsx)("div",{className:"db-code-content-copy",children:(0,e.jsxs)(en.Z,{children:[_&&_,(0,e.jsx)(pt,{className:"db-code-content--button",copyText:d||t,containerRef:v})]})}),(0,e.jsx)("div",{className:(0,B.Z)("db-code-content-block",x&&"db-code-content-break-line"),style:{fontWeight:500,whiteSpace:"pre-wrap"},ref:v,children:(0,e.jsx)(dt.Z,{style:it.Z,children:R})})]})};de.defaultProps={buttonText:"Meta data",isString:!0,height:"auto",isBreakLine:!1};var ft=de,vt=["content","children","buttonText"],ie=function(n){var t=n.content,s=n.children,a=n.buttonText,u=Un()(n,vt);return(0,e.jsx)(Qn.Z,i()(i()({overlayClassName:_t.errorTip,overlayInnerStyle:{padding:0},title:(0,e.jsx)(ft,{buttonText:a,content:t||""})},u),{},{children:s}))};ie.defaultProps={buttonText:"Failed Text"};var he=ie,bt=function(n){var t=n.icon,s=t===void 0?"databend-icon-xihuan_like":t,a=n.className,u=n.onClick,d=n.style,_=n.size,x=_===void 0?18:_;return(0,e.jsx)("span",{className:"g-box-c",children:(0,e.jsx)("i",{onClick:function(R){return u&&u(R)},className:(0,B.Z)("databend-icon-v2",s,a),style:i()(i()({},d),{},{fontSize:x+"px"})})})},tn=bt,yt=o(81763),me=o(18587);function pe(){var c=null;(0,yt.Z)(function(){c&&c()});function n(s){var a,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"body";c=(0,me.ak)((a=document)===null||a===void 0?void 0:a.querySelector(u),function(){s.resize({animation:{duration:300,easing:"cubicInOut"}})})}function t(s){var a,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"body";c=(0,me.ak)((a=document)===null||a===void 0?void 0:a.querySelector(u),function(){s()})}return{reshape:n,reshapeDOM:t}}var gt=function(n){var t=n.text,s=t===void 0?"0":t,a=n.roundColor,u=a===void 0?"#1C82F2":a,d=n.width,_=d===void 0?12:d,x=n.className,v=n.textClass,R=n.gap,T=R===void 0?8:R,C=n.wrapClass,b=C===void 0?"db-simple-legend-default":C,N=n.isInnerHtml,G=N===void 0?!1:N;return(0,e.jsxs)("span",{className:b,style:{gap:T+"px"},children:[(0,e.jsx)("span",{style:{backgroundColor:u,width:_+"px",height:_+"px",borderRadius:"50%",minWidth:"1px"},className:(0,B.Z)("db-simple-inline-block",x)}),s!==void 0&&s!==""&&(0,e.jsx)(e.Fragment,{children:G?(0,e.jsx)("span",{style:{flex:1},className:(0,B.Z)("db-simple-legend-text",v),dangerouslySetInnerHTML:{__html:s}}):(0,e.jsx)("span",{style:{flex:1},className:(0,B.Z)("db-simple-legend-text",v),children:s})})]})},fe=gt,xt=o(19632),kn=o.n(xt),Ct=o(9824),wt=o(35322),ve="OutputRows";function be(c,n,t,s,a){return[["M",c+a,n],["l",t-a*2,0],["a",a,a,0,0,1,a,a],["l",0,s-a*2],["a",a,a,0,0,1,-a,a],["l",-t+a*2,0],["a",a,a,0,0,1,-a,-a],["l",0,-s+a*2],["a",a,a,0,0,1,a,-a],["Z"]]}var Tt=[["M",19.0374+2,60],["H",15],["C",10.7909+2,60,11,5.79086+56,11,64],["C",11,10.2091+56,10.7909+2,68,15,68],["H",19.1059+2],["C",17.8458+2,13.9437+56,15.7082+2,15.2309+56,13.2964+2,15.0062+56],["C",2.5+2,70,1,13.5+56,4,7.5+56],["C",-2.5+2,1.00616+56,9.5+2,.5+56,13.2964+2,1.00616+56],["C",15.6724+2,1.00616+56,17.772+2,2.18999+56,19.0374+2,60],["Z"]],St=[["M",125.5,-18],["L",131.9952,-6.75],["L",119.00481,-6.75],["L",125.5,-18],["Z"],["M",125.5,-1],["L",125.5,-7]];function Rt(c){if((c==null?void 0:c.length)<=2)return c;var n=1,t=4.5,s=c.map(function(_){return _._value}).filter(function(_){return _!==void 0}),a=Math.min.apply(Math,kn()(s)),u=Math.max.apply(Math,kn()(s)),d=function(x,v,R,T,C){var b=(x-v)/(R-v);return T+(C-T)*b};return c.forEach(function(_){_._value!==void 0?_.lineWidth=d(_._value,a,u,n,t):_.lineWidth=n}),c}function Ut(c){var n=-1;c.sort(function(s,a){return Number((s==null?void 0:s.id)-Number(a==null?void 0:a.id))});var t=c==null?void 0:c.map(function(s){var a=s.title,u=s.name,d=s.id,_=s.statisticsDescArray;n===-1&&(n=(_==null?void 0:_.findIndex(function(v){return v._type===ve}))||0);var x=_[n]._value;return i()(i()({},s),{},{id:d,outputRows:x,value:{title:((u==null?void 0:u.length)>=26?(u==null?void 0:u.slice(0,26))+"...":u||"  ")+" [".concat(d,"]"),items:[{text:a||"  "}]}})});return t}function kt(c){var n=-1;return c==null?void 0:c.map(function(t){var s=t==null?void 0:t.statisticsDescArray;n===-1&&(n=(s==null?void 0:s.findIndex(function(d){return d._type===ve}))||0);var a=s[n]._value,u={source:t==null?void 0:t.parent_id,target:t==null?void 0:t.id};return a<=0?u:i()(i()({},u),{},{value:xn(a),_value:a})})}var qt=function(n){var t=n.plainData,s=n.graphSize,a=n.graphSizeHeight,u=n.graphRef,d=n.isLight,_=n.overviewInfoCurrent,x=n.onReady,v=n.queryId,R=v===void 0?"analysis":v,T=n.onShare,C=T===void 0?void 0:T,b=function(){var U=u==null?void 0:u.current;U&&(U.fitView(),U.refresh())},N=Rt(kt(t)),G={nodes:Ut(t),edges:N},X={width:s,height:a},pn=i()(i()({},X),{},{autoFit:!1,onReady:x,data:G,layout:{rankdir:"TB",ranksepFunc:function(){return 20}},tooltipCfg:{show:!1},toolbarCfg:{show:!0,customContent:function(U){var y=U.zoomIn,I=U.zoomOut;return(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"g-cursor g-box-c",onClick:function(){return b()},children:(0,e.jsx)(tn,{size:16,icon:"databend-icon-quanping1"})}),(0,e.jsx)("span",{className:"g-cursor g-box-c",onClick:I,children:(0,e.jsx)(tn,{size:16,icon:"databend-icon-minus-bold"})}),(0,e.jsx)("span",{className:"g-cursor g-box-c",onClick:y,children:(0,e.jsx)(tn,{size:16,icon:"databend-icon-jia"})}),(0,e.jsx)("span",{className:"g-cursor g-box-c",onClick:function(){var J;return u==null||(J=u.current)===null||J===void 0?void 0:J.downloadFullImage("databend-profile-".concat(R),"image/png")},children:(0,e.jsx)(tn,{size:16,icon:"databend-icon-xiazai_download-four"})}),C&&(0,e.jsx)("span",{className:"g-cursor g-box-c",onClick:function(){C==null||C()},children:(0,e.jsx)(tn,{size:16,icon:"databend-icon-fenxiang_share-one"})})]})}},nodeCfg:{padding:10,size:[250,40],title:{autoEllipsis:!0,containerStyle:{fill:"transparent"},style:function(U){var y;return{fontWeight:600,fill:U!=null&&(y=U.errors)!==null&&y!==void 0&&y.length?"#fff":d?"#000":"#fff"}}},anchorPoints:[[.5,0],[.5,1]],style:function(U){var y;return{radius:5,fill:U!=null&&(y=U.errors)!==null&&y!==void 0&&y.length?"#f73920":d?"#fff":"#101",stroke:d?"#ccc":"#fff",filter:d?"drop-shadow(2px 2px 2px rgba(204, 204, 204, .3))":"drop-shadow(2px 3px 2px rgba(255, 255, 255, .2))"}},nodeStateStyles:{highlight:{stroke:"#2c91ff",lineWidth:2},hover:{stroke:"#2c91ff",lineWidth:2}},customContent:function(U,y,I){var D,J,E,K,un,rn,P=I.startX,O=I.startY,Cn=I.width,_n=U.text;_n=(D=_n)===null||D===void 0?void 0:D.replace(/\n/g," ");var qn=230,On=(J=_n)===null||J===void 0?void 0:J.length,Z=y==null||(E=y.cfg)===null||E===void 0||(E=E.item)===null||E===void 0||(E=E._cfg)===null||E===void 0?void 0:E.model,jn=(Z==null?void 0:Z.totalTime)/(((K=_.current)===null||K===void 0?void 0:K.totalTime)||1),wn=Z==null||(un=Z.errors)===null||un===void 0?void 0:un.length,ne=Z==null?void 0:Z.parent_id,fn=y.addShape("text",{attrs:{textBaseline:"top",x:P,y:O,text:_n,fill:wn?"rgba(255,255,255,0.8)":"#75767a",textAlign:"left"},name:"text-".concat(Math.random())}),Nn=fn.getBBox().width;if(On>26&&Nn>Cn){var Hn,Wn=((Hn=_n)===null||Hn===void 0?void 0:Hn.slice(0,Math.floor(Cn/Nn*On-3)))+"...";fn.attr("text",Wn)}var vn=(rn=fn==null?void 0:fn.getBBox().height)!==null&&rn!==void 0?rn:0,bn=8,Bn=4,yn=jn*qn,ee=be(P,O+vn+10,qn,bn,Bn);y.addShape("path",{attrs:{path:ee,fill:"#f2f2f2"},name:"progress-bg-".concat(Math.random())});var te=be(P,O+vn+10,yn,bn,Bn);if(y.addShape("path",{attrs:{path:te,fill:yn<=0?"rgba(0,0,0,0)":"rgb(1, 117, 246)"},name:"progress-fg-".concat(Math.random())}),yn>0&&yn<9&&y.addShape("path",{attrs:{path:Tt,fill:wn?"#f73920":d?"#fff":"#101"},name:"circle-path-bg-".concat(Math.random())}),ne==="null"){var An=N==null?void 0:N.find(function(En){return(En==null?void 0:En.source)==="null"});y.addShape("path",{attrs:{path:St,fill:"#ccc",stroke:"#ccc",lineWidth:(An==null?void 0:An.lineWidth)||1},name:"percentage-output-text-".concat(Math.random())});var Zn=xn(Z==null?void 0:Z.outputRows);y.addShape("text",{attrs:{textBaseline:"top",x:125+j(Zn)/2,y:-30,text:Zn,fill:d?"rgba(12, 22, 43, 0.6)":"#fff",fontWeight:"bold",fontSize:12,textAlign:"right"},name:"percentage-output-text"})}var an=jn>0?"".concat((jn*100).toFixed(1),"%"):"0%";return y.addShape("text",{attrs:{textBaseline:"top",x:P+Cn,y:O-27,text:an,fill:wn?"#fff":d?"#000":"#fff",fontSize:11,textAlign:"right"},name:"percentage-text-".concat(Math.random())}),Math.max(vn,bn)}},edgeCfg:{type:"cubic-vertical",endArrow:!1,style:function(U){var y=(U==null?void 0:U.lineWidth)||1;return{lineWidth:y}},label:{style:{fontWeight:600,fill:d?"rgba(12, 22, 43, 0.6)":"#fff"}},startArrow:{type:"triangle"}},graphCfg:{containerStyle:{backgroundColor:"#f0f0f0"}},markerCfg:function(U){var y;return{animate:!0,position:"bottom",show:(y=G.edges.filter(function(I){return I.source===U.id}))===null||y===void 0?void 0:y.length}},behaviors:["drag-canvas","zoom-canvas"]});return(0,e.jsx)(Ct.Z,i()({},pn))},jt=(0,S.memo)(qt,function(c,n){var t=(0,wt.Z)(c.plainData,n.plainData),s=c.graphSize===n.graphSize,a=c.graphSizeHeight===n.graphSizeHeight,u=c.isLight===n.isLight;return t&&s&&a&&u}),Nt=o(9783),ye=o.n(Nt),ge=o(54907),Ht=o(94274),At=o(25968),Et=o(6226),Pt=o(63677),Lt=["children"],Dt=function(n){var t=n.children,s=Un()(n,Lt);return(0,e.jsx)(nn.Z,i()(i()({},s),{},{className:(0,B.Z)(s.className,"db-reset-white-button"),style:i()({gap:"6px"},s==null?void 0:s.style),children:t}))},Mt=Dt,zt=["padding","borderRadius","children","className","isNeedBorder","isJader","onClick","height"],xe=function(n){var t=n.padding,s=n.borderRadius,a=n.children,u=n.className,d=n.isNeedBorder,_=n.isJader,x=n.onClick,v=n.height,R=Un()(n,zt),T=t===void 0?[20,20,20,20]:t,C=Array.isArray(T);return(0,e.jsx)("div",i()(i()({onClick:x,className:(0,B.Z)("db-card-wrap-out",u,d&&"db-card-wrap-border",_&&"db-card-wrap-jader"),style:i()(i()({},C?{paddingTop:T[0]+"px",paddingRight:T[1]+"px",paddingBottom:T[2]+"px",paddingLeft:T[3]+"px"}:{padding:t+"px"}),{},{height:v==="auto"?"auto":v+"px",borderRadius:"".concat(s,"px")})},R),{},{children:a}))};xe.defaultProps={padding:[20,20,20,20],borderRadius:6,isNeedBorder:!0,height:"auto",isJader:!1};var It=xe,Ot=o(49677),Wt=o.n(Ot),Bt=o(55171),Zt=o.n(Bt),Ft=function(n){var t=Object.assign({},(Wt()(n),n));return(0,e.jsx)(Zt(),i()(i()({style:{padding:"10px",borderRadius:"4px"},displayDataTypes:!1,theme:"ashes"},t),{},{src:(t==null?void 0:t.src)||{}}))},Ce=Ft,we=o(78234),Te=o(64665),Se=o(97369),$t=o(49956),Gt=o(47008),Jt=o(78537),Re=o(27067),Kt=o(31825),Ue=o(35183),Xt=o(11415),ke=o(79016),qe=o(6228);Ue.D([$t.N,Gt.N,Jt.N,Re.N,Kt.N,Te.N,Se.N,qe.N,ke.z]),Ue.D([Re.N,Te.N,Se.N,qe.N,ke.z]);var Vt=function(n){var t=n.series,s=n.legendData,a=n.xData,u=n.isLight,d=(0,S.useRef)(null),_=pe(),x=_.reshape,v=u?"rgba(1, 14, 41, 0.08)":"rgba(255, 255, 255, 0.08)",R=u?"rgba(12, 22, 43, 0.6)":"rgba(249, 249, 249, 0.6)";return(0,we.Z)(function(){var T=Xt.S1(d.current),C={tooltip:{trigger:"axis"},legend:{type:"scroll",data:s},grid:{left:"13%",right:"9%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:a,axisLine:{lineStyle:{color:v}},axisLabel:{showMinLabel:!0,showMaxLabel:!0,color:R,margin:8},axisTick:{show:!1}},yAxis:{offset:30,type:"value"},series:t};T.setOption(C),x(T,"body")}),(0,e.jsx)("div",{style:{height:"280px",width:"100%"},ref:d})},Qt=(0,S.memo)(Vt),Yt=["isLight","metricsData"],ns=ge.Z.Panel;function Yn(c){var n,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return c?(n=Object.values(c))===null||n===void 0?void 0:n.sort(function(s,a){return s==null?void 0:s.localeCompare(a)}).join(" "):t||"No labels"}function es(c){return c.map(function(n){var t=Object.keys(n.value)[0],s=t==="Histogram",a=t==="Summary",u=s||a;if(!n.labels&&!u)return{name:n.name,columns:[{title:t,key:t,dataIndex:t}],data:[ye()({},t,n.value[t])],labels:n.labels?n.labels:null,value:n.value};if(u){var d=s?n.value.Histogram:n.value.Summary,_=[],x=[];return _=d.map(function(C){return s?C.less_than:C.quantile}),x=d.map(function(C){return C.count}),{isChart:!0,name:n.name,_tag:Yn(n.labels,n.name),columns:_,data:[x],labels:n.labels,value:n.value,type:t}}var v=Object.keys(n.labels),R=v.map(function(C){return{title:C,key:C,dataIndex:C}}).concat({title:t,key:t,dataIndex:t}),T=[i()(i()({},n.labels),{},ye()({},t,n.value[t]))];return{name:n.name,columns:R,data:T,labels:n.labels,value:n.value}})}function ts(c){var n={};return c.forEach(function(t){if(!n[t.name])n[t.name]=i()(i()({},t),{},{labelsArr:[i()(i()({},t.labels),{},{_tag:Yn(t.labels,t.name)})]}),delete n[t.name].labels;else if(t!=null&&t.type)n[t.name].data=[].concat(kn()(n[t.name].data),kn()(t.data)),n[t.name].labelsArr.push(i()(i()({},t.labels),{},{_tag:Yn(t.labels,t.name)}));else{var s;(s=n[t.name].data).push.apply(s,kn()(t.data))}}),Object.values(n)}function ss(c){return c==null?void 0:c.map(function(n){return{machine:n[0],data:ts(es(n[1]).sort(function(t,s){if((t==null?void 0:t.name)===(s==null?void 0:s.name)){var a;return s==null||(a=s._tag)===null||a===void 0?void 0:a.localeCompare(t==null?void 0:t._tag)}return 0}).sort(function(t,s){return!(t!=null&&t.type)&&!(s!=null&&s.type)?0:t!=null&&t.type?s!=null&&s.type?t.type.localeCompare(s==null?void 0:s.type):1:-1}))}})}var as=function(n){var t=n.isLight,s=n.metricsData,a=Un()(n,Yt),u=(0,S.useState)(!1),d=q()(u,2),_=d[0],x=d[1],v=(0,S.useState)([]),R=q()(v,2),T=R[0],C=R[1];return(0,S.useEffect)(function(){if(s){var b=Object.entries(s),N=ss(b);C(N)}},[s]),(0,e.jsx)(Ht.Z,i()(i()({destroyOnClose:!0,width:"100vw"},a),{},{title:(0,e.jsxs)(en.Z,{children:[(0,e.jsx)("span",{children:a==null?void 0:a.title}),(0,e.jsx)(Mt,{onClick:function(){return x(!_)},children:(0,e.jsxs)(en.Z,{size:4,children:[(0,e.jsx)(tn,{size:14,icon:"databend-icon-qiehuan_switch"}),_?"Chart View":"Metrics JSON"]})})]}),children:(0,e.jsx)(e.Fragment,{children:_?(0,e.jsx)(Ce,{src:s}):(0,e.jsx)(ge.Z,{className:"profile-metrics-collapseWrap",expandIconPosition:"start",defaultActiveKey:Array.from({length:(T==null?void 0:T.length)+1},function(b,N){return N}),children:T==null?void 0:T.map(function(b,N){var G,X=b==null||(G=b.data)===null||G===void 0?void 0:G.length,pn=X%2!==0;return(0,e.jsx)(ns,{header:(0,e.jsxs)("div",{className:"profile-metrics-header",children:["Machine ",N+1,":",b==null?void 0:b.machine]}),children:(0,e.jsx)(At.Z,{gutter:[16,16],className:"profile-metrics-row",children:b==null?void 0:b.data.map(function(h,U){var y,I;return(0,S.createElement)(Et.Z,{xl:12,xxl:12,lg:24,md:24,sm:24,xs:24,className:"profile-metrics-col",span:pn&&X-1===U?24:12,key:U},(0,e.jsx)("div",{className:"profile-metrics-name",children:h==null?void 0:h.name}),h!=null&&h.data?(0,e.jsx)(e.Fragment,{children:h!=null&&h.type?(0,e.jsx)(Qt,{isLight:t,series:h==null||(y=h.data)===null||y===void 0?void 0:y.map(function(D,J){var E;return{type:"bar",data:D,name:h==null||(E=h.labelsArr[J])===null||E===void 0?void 0:E._tag}}),legendData:h==null||(I=h.labelsArr)===null||I===void 0?void 0:I.map(function(D){return D==null?void 0:D._tag}),xData:h==null?void 0:h.columns}):(0,e.jsx)(Pt.Z,{className:"profile-metrics-table",pagination:!1,dataSource:h==null?void 0:h.data,columns:h==null?void 0:h.columns},"key")}):(0,e.jsx)(It,{children:JSON.stringify(h==null?void 0:h.value)}))})})},N)})})})}))},os=as,ls="CpuTime",cs="WaitTime";function us(c){return c==null?void 0:c.map(function(n){var t,s,a,u=Object.keys(n)[0];return{_errorType:u,message:((t=n[u])===null||t===void 0?void 0:t.message)||"",detail:((s=n[u])===null||s===void 0?void 0:s.detail)||"",backtrace:((a=n[u])===null||a===void 0||(a=a.backtrace)===null||a===void 0||(a=a.build_id)===null||a===void 0?void 0:a.join(","))||""}})}function rs(c,n){return c==="Bytes"?ue(n):c==="Rows"||c==="Count"?Xn(n):c==="MillisSeconds"?In(n):c==="NanoSeconds"?In(n/1e6):n}var _s=function(n){var t,s,a,u,d=n.profileRef,_=n.queryDuration,x=n.queryId,v=x===void 0?"analysis":x,R=n.outValue,T=n.countShow,C=n.offsetWidth,b=C===void 0?400:C,N=n.offsetHeight,G=N===void 0?150:N,X=n.showTextArea,pn=X===void 0?!0:X,h=n.initLoading,U=h===void 0?!1:h,y=n.isNeedMetrics,I=y===void 0?!1:y,D=n.isDemo,J=D===void 0?!1:D,E=n.isLight,K=E===void 0?!0:E,un=n.getActiveName,rn=un===void 0?null:un,P=n.getOverviewInfo,O=P===void 0?null:P,Cn=n.ErrorTicketDom,_n=Cn===void 0?(0,e.jsx)(e.Fragment,{}):Cn,qn=n.isAdmin,On=qn===void 0?!1:qn,Z=n.onShare,jn=Z===void 0?void 0:Z,wn=n.responseDom,ne=wn===void 0?"body":wn,fn=(0,z.Z)(0),Nn=q()(fn,2),Hn=Nn[0],Wn=Nn[1],vn=(0,S.useRef)(null),bn=(0,S.useRef)(null),Bn=(0,z.Z)(window.innerHeight-150),yn=q()(Bn,2),ee=yn[0],te=yn[1],An=pe(),Zn=An.reshapeDOM,an=(0,S.useRef)(void 0),En=(0,z.Z)([]),Ne=q()(En,2),F=Ne[0],vs=Ne[1],dn=(0,S.useRef)(void 0),bs=(0,z.Z)(!0),He=q()(bs,2),Ae=He[0],se=He[1],ys=(0,z.Z)(""),Ee=q()(ys,2),Fn=Ee[0],Pe=Ee[1],gs=(0,z.Z)([]),Le=q()(gs,2),on=Le[0],xs=Le[1],Cs=(0,z.Z)([]),De=q()(Cs,2),Tn=De[0],ws=De[1],Ts=(0,z.Z)(!1),Me=q()(Ts,2),Ss=Me[0],ze=Me[1],Rs=(0,z.Z)({clientX:0,clientY:0,show:!1,text:""}),Ie=q()(Rs,2),hn=Ie[0],ae=Ie[1],Us=(0,z.Z)({cpuTime:0,waitTime:0,isTotalBigerZero:!1,totalTime:0,totalTimePercent:"0%",labels:void 0,statisticsDescArray:[],metrics:null}),Oe=q()(Us,2),r=Oe[0],oe=Oe[1];function ks(l){var g,w,p,f=l==null?void 0:l.profiles,H=l==null?void 0:l.statistics_desc,k=(g=H[ls])===null||g===void 0?void 0:g.index,A=(w=H[cs])===null||w===void 0?void 0:w.index,M=0,ln=0,Pn=[];f==null||f.forEach(function(m){m.id=String(m.id),m.parent_id=String(m.parent_id);var cn=m==null?void 0:m.errors,le=m==null?void 0:m.statistics[k],ce=m==null?void 0:m.statistics[A];m.totalTime=le+ce,m.cpuTime=le,m.waitTime=ce,M+=le,ln+=ce,m.errors=(cn==null?void 0:cn.length)>0?us(m==null?void 0:m.errors):[],m.statisticsDescArray=Object.entries(H).map(function(js){var $e=q()(js,2),Ns=$e[0],L=$e[1];return{_type:Ns,desc:L==null?void 0:L.desc,display_name:(L==null?void 0:L.display_name)||(L==null?void 0:L.displayName),index:L==null?void 0:L.index,unit:L.unit,plain_statistics:L==null?void 0:L.plain_statistics,_value:m.statistics[L==null?void 0:L.index]}})});var mn=M+ln;f==null||f.forEach(function(m){m.totalTimePercent=Rn(m==null?void 0:m.totalTime,mn),m.cpuTimePercent=Rn(m==null?void 0:m.cpuTime,m.totalTime),m.waitTimePercent=Rn(m==null?void 0:m.waitTime,m.totalTime)}),vs(f),xs((p=(0,rt.Z)(f))===null||p===void 0||(p=p.filter(function(m){return parseFloat(m.totalTimePercent)>.09}))===null||p===void 0?void 0:p.sort(function(m,cn){return cn.totalTime-m.totalTime}));var Ln=Rn(M,mn),Sn=Rn(ln,mn),Dn={cpuTime:M,waitTime:ln,totalTime:mn,totalTimePercent:"100%",cpuTimePercent:Ln,waitTimePercent:Sn,statisticsDescArray:Pn,isNode:!1,errors:[]};dn.current=Dn,oe(Dn),O==null||O(Dn)}function qs(){var l=an==null?void 0:an.current;l&&(l==null||l.fitView())}var $n=function(){d&&Wn(J?700:(d==null?void 0:d.offsetWidth)-b),te(window.innerHeight-G)};(0,S.useEffect)(function(){rn&&rn(Fn)},[Fn]),(0,S.useEffect)(function(){if(R)try{ks(R)}catch(l){Vn.ZP.destroy(),Vn.ZP.warning("Incorrect data")}},[T,R]),(0,S.useEffect)(function(){U&&an.current&&qs()},[U]),(0,S.useEffect)(function(){F!=null&&F.length&&$n()},[F,pn]),(0,S.useEffect)(function(){var l=[];if(On){var g;l=r==null||(g=r.statisticsDescArray)===null||g===void 0?void 0:g.filter(function(p){return p._value>0})}else{var w;l=r==null||(w=r.statisticsDescArray)===null||w===void 0?void 0:w.filter(function(p){return p._value>0&&(p==null?void 0:p.plain_statistics)})}ws(l)},[r==null?void 0:r.statisticsDescArray]),(0,S.useEffect)(function(){$n(),Zn(function(){$n()},ne)},[]);function We(l){var g=l.totalTime,w=l.totalTimePercent,p=l.cpuTime,f=l.waitTime,H=l.cpuTimePercent,k=l.waitTimePercent,A=l.id,M=l.isNode,ln=l.labels,Pn=l.statisticsDescArray,mn=l.name,Ln=l.errors;Pe(A);var Sn={cpuTime:p,waitTime:f,totalTime:g,totalTimePercent:w,cpuTimePercent:H,waitTimePercent:k,labels:ln,statisticsDescArray:Pn,isNode:M,name:mn,id:A,metrics:l==null?void 0:l.metrics,errors:Ln};oe(Sn),O==null||O(Sn)}function Be(l){return l.getNodes()}function Ze(l,g){l.setItemState(g,"highlight",!0)}function Fe(l){Be(l).forEach(function(g){l.clearItemStates(g)})}function Gn(){ae({clientX:0,clientY:0,show:!1,text:""})}return(0,e.jsxs)(e.Fragment,{children:[(hn==null?void 0:hn.show)&&(0,e.jsx)(Qe,{position:{x:hn==null?void 0:hn.clientX,y:hn.clientY},title:hn.text}),(0,e.jsxs)("div",{ref:bn,className:"profile-index-container",children:[(F==null?void 0:F.length)>0&&(0,e.jsxs)("div",{className:"profile-index-details-info",children:[(on==null?void 0:on.length)>0&&(0,e.jsxs)("div",{className:"profile-index-top-ranking",children:[(0,e.jsxs)("div",{className:"profile-indx-most-expensive-nodes",children:[" ","Most Expensive Nodes",(0,e.jsxs)("span",{className:"profile-index-ranking-length",children:[" ","(",on==null?void 0:on.length," of ",F==null?void 0:F.length,")"]})]}),(0,e.jsx)("div",{style:{marginTop:"8px"},children:on==null?void 0:on.map(function(l,g){return(0,e.jsxs)("div",{onClick:function(){var p,f,H=l==null?void 0:l.id;if(Fn!==H){We(i()(i()({},l),{},{isNode:!0})),se(!1);var k=an.current,A=k==null?void 0:k.cfg.nodes,M=A==null?void 0:A.find(function(cn){return(cn==null?void 0:cn._cfg.id)===H}),ln=k==null?void 0:k.getZoom(),Pn=M==null||(p=M._cfg)===null||p===void 0||(p=p.bboxCache)===null||p===void 0?void 0:p.x,mn=M==null||(f=M._cfg)===null||f===void 0||(f=f.bboxCache)===null||f===void 0?void 0:f.y,Ln=k==null?void 0:k.getWidth(),Sn=k==null?void 0:k.getHeight(),Dn=Ln/2-Pn*ln,m=Sn/2-mn*ln+20;Fe(k),Ze(k,M),(A==null?void 0:A.length)>1&&k.moveTo(Dn,m)}},className:(0,B.Z)("profile-index-top-item-style",Fn===l.id&&"profile-index-top-active-item-style"),children:[(0,e.jsxs)("span",{children:[l.name," [",l.id,"]"]}),(0,e.jsx)("span",{className:"profile-index-top-item-time",children:l.totalTimePercent})]},g)})})]}),(0,e.jsxs)("div",{className:(0,B.Z)("profile-index-top-ranking","profile-common-styles-pm"),children:[(0,e.jsxs)("div",{className:"profile-common-styles-few g-box-center-between",children:[(0,e.jsxs)("div",{children:["Profile Overview",(0,e.jsxs)("span",{className:"profile-index-color-text-2",children:[" ",Ae&&"(Finished)"]})]}),!Ae&&I&&(0,e.jsx)(Qn.Z,{title:r!=null&&r.metrics?void 0:"No Metrics",children:(0,e.jsx)(nn.Z,{disabled:!(r!=null&&r.metrics),onClick:function(){return ze(!0)},type:"primary",size:"small",children:(0,e.jsxs)(en.Z,{size:4,children:[r!=null&&r.metrics?(0,e.jsx)(tn,{icon:"databend-icon-yulan-dakai_preview-open"}):(0,e.jsx)(tn,{icon:"databend-icon-yulan-guanbi_preview-close-one"}),"Metrics"]})})})]}),(0,e.jsxs)("div",{className:"g-mt-8",children:[r.isNode?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"g-t-right",children:r==null?void 0:r.totalTimePercent}),(0,e.jsx)(ut,{data:[{color:"rgb(28, 130, 242)",percent:parseFloat(r.cpuTimePercent)},{color:"rgb(255, 152, 0)",percent:parseFloat(r.waitTimePercent)}]})]}):(0,e.jsxs)("div",{className:"profile-common-styles-bcpc",children:[(0,e.jsx)("span",{children:"Total Execution Time"}),(0,e.jsxs)("span",{className:"profile-index-color-text-1",children:[(0,e.jsxs)("span",{className:"profile-index-color-text-2",children:["(",In(R?(r==null?void 0:r.totalTime)/1e6:_),")"]})," ",r==null?void 0:r.totalTimePercent]})]}),(0,e.jsxs)("div",{className:"profile-common-styles-bcpc",children:[(0,e.jsx)(fe,{width:5,text:"CPU Time",textClass:"profile-index-color-text-2"}),(0,e.jsx)("span",{className:"profile-index-color-text-1",children:r==null?void 0:r.cpuTimePercent})]}),(0,e.jsxs)("div",{className:"profile-common-styles-bcpc",children:[(0,e.jsx)(fe,{width:5,roundColor:"rgb(255, 152, 0)",text:"I/O Time",textClass:"profile-index-color-text-2"}),(0,e.jsx)("span",{className:"profile-index-color-text-1",children:r==null?void 0:r.waitTimePercent})]})]})]}),(r==null||(t=r.errors)===null||t===void 0?void 0:t.length)>0&&(0,e.jsxs)("div",{className:(0,B.Z)("profile-index-top-ranking","profile-index-top-ranking-errors","profile-common-styles-pm"),children:[(0,e.jsxs)(en.Z,{className:"profile-common-styles-few g-color-text-danger",children:["Errors",_n&&_n]}),r==null||(s=r.errors)===null||s===void 0?void 0:s.map(function(l,g){return(0,e.jsxs)("div",{className:"g-mt-10",children:[(0,e.jsx)("div",{className:"profile-index-color-text-1",children:l==null?void 0:l._errorType}),(0,e.jsxs)("div",{className:"profile-common-styles-gbp profile-index-color-text-2",children:[(0,e.jsxs)("div",{className:"g-class-ellipsis",children:["message:",(0,e.jsx)(he,{placement:"rightTop",destroyTooltipOnHide:!0,content:l==null?void 0:l.message,buttonText:"message",children:l==null?void 0:l.message})]}),(0,e.jsxs)("div",{className:"g-class-ellipsis",children:["detail:",(0,e.jsx)(Qn.Z,{destroyTooltipOnHide:!0,title:l==null?void 0:l.detail,children:l==null?void 0:l.detail})]}),(0,e.jsxs)("div",{className:"g-class-ellipsis",children:["backtrace:",(0,e.jsx)(he,{placement:"rightTop",destroyTooltipOnHide:!0,content:l==null?void 0:l.backtrace,buttonText:"backtrace",children:l==null?void 0:l.backtrace})]})]})]},g)})]}),(Tn==null?void 0:Tn.length)>0&&(0,e.jsxs)("div",{className:(0,B.Z)("profile-index-top-ranking","profile-common-styles-pm"),children:[(0,e.jsx)("div",{className:"profile-common-styles-few",children:"Statistics"}),(0,e.jsx)("div",{className:"g-mt-8",children:Tn==null?void 0:Tn.map(function(l,g){return(0,e.jsxs)("div",{className:"profile-common-styles-bcpc",children:[(0,e.jsx)("span",{children:l==null?void 0:l.display_name}),(0,e.jsx)("span",{className:"profile-index-color-text-1",children:rs(l.unit,l==null?void 0:l._value)})]},g)})})]}),(r==null||(a=r.labels)===null||a===void 0?void 0:a.length)>0&&(0,e.jsxs)("div",{className:(0,B.Z)("profile-index-top-ranking","profile-common-styles-pm"),children:[(0,e.jsx)("div",{className:"profile-common-styles-few",children:"Attributes"}),r==null||(u=r.labels)===null||u===void 0?void 0:u.map(function(l,g){var w;return(0,e.jsxs)("div",{className:"g-mt-10",children:[(0,e.jsx)("div",{className:"profile-index-color-text-1",children:l==null?void 0:l.name}),(0,e.jsx)("div",{children:(0,e.jsx)("div",{className:"profile-common-styles-gbp profile-index-color-text-2",children:l==null||(w=l.value)===null||w===void 0?void 0:w.map(function(p){return(0,e.jsx)("div",{style:{wordWrap:"break-word"},children:p},p)})})})]},g)})]})]}),U?(0,e.jsx)("div",{className:"g-box-c",style:{height:"700px"},children:(0,e.jsx)(re,{})}):(0,e.jsx)(e.Fragment,{children:(F==null?void 0:F.length)>0?(0,e.jsx)(jt,{onShare:jn,queryId:v,plainData:F,graphSize:Hn,graphSizeHeight:ee,graphRef:an,isLight:K,handleResize:$n,overviewInfoCurrent:dn,onReady:function(g){an.current=g,g.setMaxZoom(2),g.on("node:click",function(w){se(!1);var p=w.item._cfg.model;We(i()(i()({},p),{},{isNode:!0}));var f=Be(g),H=w.item._cfg.id,k=f==null?void 0:f.find(function(A){return(A==null?void 0:A._cfg.id)===H});f==null||f.filter(function(A){return A._cfg.id!==H}).forEach(function(A){g.clearItemStates(A)}),Ze(g,k)}),g.on("node:mouseleave",function(){vn.current||(vn.current=document.getElementsByTagName("canvas")[0]),vn.current.style.cursor="move",Gn()}),g.on("node:mouseover",function(w){var p,f=w==null||(p=w.target)===null||p===void 0||(p=p.cfg)===null||p===void 0?void 0:p.name;if(f!=null&&f.includes("percentage-output-text")){var H,k=w.clientX,A=w.clientY,M=w==null||(H=w.item)===null||H===void 0||(H=H._cfg)===null||H===void 0||(H=H.model)===null||H===void 0?void 0:H.outputRows;ae({clientX:k-70,clientY:A-52,show:!0,text:"Output Rows: ".concat(Xn(M))})}else Gn()}),g.on("canvas:click",function(){Pe(""),se(!0),oe(dn==null?void 0:dn.current),O==null||O(dn==null?void 0:dn.current),Fe(g)}),g.on("canvas:dragstart",function(){bn.current.style.userSelect="none"}),g.on("canvas:dragend",function(){bn.current.style.userSelect="unset"}),g.on("edge:mouseover",function(w){var p,f,H=w==null||(p=w.target)===null||p===void 0||(p=p.cfg)===null||p===void 0?void 0:p.type,k=w==null||(f=w.item)===null||f===void 0||(f=f._cfg)===null||f===void 0||(f=f.model)===null||f===void 0?void 0:f._value,A=w.clientX,M=w.clientY;H==="text"?ae({clientX:A-40,clientY:M-50,show:!0,text:"Rows: ".concat(Xn(k))}):Gn()}),g.on("edge:mouseleave",function(){Gn()})}}):(0,e.jsx)("div",{style:{minHeight:"700px"},children:(0,e.jsx)(lt,{title:"No Profile",paddingTop:"150px",subTitle:(0,e.jsxs)("div",{children:["Some queries, such as those with"," ",(0,e.jsx)("span",{style:{fontWeight:700},children:"USE"})," and"," ",(0,e.jsx)("span",{style:{fontWeight:700},children:"DESCRIBE"})," ","statements, have no query profile."]}),TopIcon:(0,e.jsx)(tn,{icon:"databend-icon-zuzhijiagou"})})})})]}),(0,e.jsx)(os,{isLight:K,metricsData:r==null?void 0:r.metrics,title:"Metrics Details: ".concat(r==null?void 0:r.name,"[").concat(r==null?void 0:r.id,"]  ").concat(r==null?void 0:r.totalTimePercent),onClose:function(){return ze(!1)},visible:Ss})]})},je=(0,S.memo)(_s),ds=o(92688),is=o(58206),hs=o(55753),ms=ds.Z.TextArea,ps=function(n){var t,s=n.isDemo,a=s===void 0?!1:s,u=n.isNeedMetrics,d=u===void 0?!1:u,_=n.canShare,x=_===void 0?!1:_,v=n.showBack,R=v===void 0?!0:v,T=(0,S.useState)(""),C=q()(T,2),b=C[0],N=C[1],G=(0,S.useState)(""),X=q()(G,2),pn=X[0],h=X[1],U=(0,S.useState)(0),y=q()(U,2),I=y[0],D=y[1],J=(0,S.useState)(!1),E=q()(J,2),K=E[0],un=E[1];(0,we.Z)(function(){if(x){var P=Ke(Xe("value"));P&&N(P)}});function rn(){D(I+1);try{var P;h((P=JSON.parse(b))===null||P===void 0?void 0:P.query_id)}catch(O){}}return(0,e.jsxs)("div",{className:"g-pa-24 g-align-s site-layout-right",style:{gap:"12px"},children:[(0,e.jsxs)(en.Z,{size:12,className:"g-pl-10 g-pr",direction:"vertical",children:[!K&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ms,{placeholder:"Please copy the profile log json you generated",className:"g-border-radius-middle g-border g-color-bg-1",value:b,onChange:function(O){N(O.target.value)},style:{width:"320px",height:"calc(100vh - 100px)"}}),(0,e.jsxs)(en.Z,{className:"g-box-center-between",children:[(0,e.jsxs)(en.Z,{children:[R&&(0,e.jsx)(nn.Z,{type:"link",href:"/",children:"Back"}),(0,e.jsx)(nn.Z,{type:"dashed",onClick:function(){N(hs.DEMO),rn()},children:"Demo"})]}),(0,e.jsxs)(en.Z,{children:[(0,e.jsx)(nn.Z,{disabled:!b,type:"primary",onClick:function(){return D(I+1)},children:"Show"}),(0,e.jsx)(nn.Z,{onClick:function(){N("")},children:"Clear"})]})]})]}),(0,e.jsx)(nn.Z,{style:{position:"fixed",bottom:"80px",left:"10px",zIndex:10},type:"primary",onClick:function(){un(!K)},icon:(0,e.jsx)(tn,{icon:K?"databend-icon-zhankai_expand-left":"databend-icon-zhankai_expand-right"})})]}),(0,e.jsx)("div",{className:"g-pa-6 g-color-bg-1 g-box-flex g-border-radius-middle",children:(0,e.jsx)(je,{onShare:x?function(){(0,is.Z)(window.location.origin+window.location.pathname+"?value="+Je(b)),Vn.ZP.success("Copied to clipboard")}:void 0,offsetWidth:a?K?900:1200:K?100:695,isNeedMetrics:d,offsetHeight:60,countShow:I,outValue:b&&Ge(b)?JSON.parse(b):"",showTextArea:K,queryId:pn,queryDuration:0,profileRef:(t=document)===null||t===void 0?void 0:t.body})})]})},fs=ps},14633:function(Mn,$,o){o.r($),o.d($,{texts:function(){return i}});var gn=o(97753);const i=[{value:`outValue?: JSON;
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

`,paraId:0,tocIndex:2}]},45760:function(Mn,$){$.Z=`export const DEMO = \`{
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
