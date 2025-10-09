"use strict";(self.webpackChunkdatabend_profile_ui=self.webpackChunkdatabend_profile_ui||[]).push([[152],{25840:function(In,en,o){o.r(en),o.d(en,{demos:function(){return Vn}});var Rn=o(15009),d=o.n(Rn),Xn=o(99289),q=o.n(Xn),B=o(67294),X=o(97753),C=o(61712),Wn=o(55753),Vn={"queryprofile-demo-0":{component:B.memo(B.lazy(q()(d()().mark(function hn(){var an,on,ln,Z;return d()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,Promise.resolve().then(o.bind(o,61712));case 2:return an=k.sent,on=an.QueryProfile,k.next=6,Promise.resolve().then(o.bind(o,55753));case 6:return ln=k.sent,Z=ln.DEMO,k.abrupt("return",{default:function(){return B.createElement(on,{isDemo:!0,outValue:JSON.parse(Z),isNeedMetrics:!0,profileRef:"body"})}});case 9:case"end":return k.stop()}},hn)})))),asset:{type:"BLOCK",id:"queryprofile-demo-0",refAtomIds:["QueryProfile"],dependencies:{"index.jsx":{type:"FILE",value:`import { QueryProfile } from 'databend-profile-ui';
import { DEMO } from './demo';

export default () => (
  <QueryProfile
    isDemo={true}
    outValue={JSON.parse(DEMO)}
    isNeedMetrics
    profileRef={'body'}
  />
);`},"databend-profile-ui":{type:"NPM",value:"0.1.9"},"./demo.ts":{type:"FILE",value:o(45760).Z}},entry:"index.jsx"},context:{"./demo.ts":Wn,"databend-profile-ui":C,"/home/runner/work/databend-profile-ui/databend-profile-ui/src/QueryProfile/demo.ts":Wn},renderOpts:{compile:function(){var hn=q()(d()().mark(function on(){var ln,Z=arguments;return d()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.e(335).then(o.bind(o,37335));case 2:return k.abrupt("return",(ln=k.sent).default.apply(ln,Z));case 3:case"end":return k.stop()}},on)}));function an(){return hn.apply(this,arguments)}return an}()}},"queryprofile-demo-1":{component:B.memo(B.lazy(q()(d()().mark(function hn(){var an,on;return d()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,Promise.resolve().then(o.bind(o,61712));case 2:return an=Z.sent,on=an.TestProfile,Z.abrupt("return",{default:function(){return B.createElement(on,{isDemo:!0})}});case 5:case"end":return Z.stop()}},hn)})))),asset:{type:"BLOCK",id:"queryprofile-demo-1",refAtomIds:["QueryProfile"],dependencies:{"index.jsx":{type:"FILE",value:`import { TestProfile } from 'databend-profile-ui';

export default () => <TestProfile isDemo />;`},"databend-profile-ui":{type:"NPM",value:"0.1.9"}},entry:"index.jsx"},context:{"databend-profile-ui":C},renderOpts:{compile:function(){var hn=q()(d()().mark(function on(){var ln,Z=arguments;return d()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,o.e(335).then(o.bind(o,37335));case 2:return k.abrupt("return",(ln=k.sent).default.apply(ln,Z));case 3:case"end":return k.stop()}},on)}));function an(){return hn.apply(this,arguments)}return an}()}}}},55753:function(In,en,o){o.r(en),o.d(en,{DEMO:function(){return Rn}});var Rn=`{
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
    }`},61712:function(In,en,o){o.r(en),o.d(en,{DatabendJson:function(){return xe},QueryProfile:function(){return qe},TestProfile:function(){return vs}});var Rn=o(97857),d=o.n(Rn),Xn=o(5574),q=o.n(Xn),B=o(92652),X=o(90512),C=o(67294),Wn=o(92077),Vn=o.n(Wn),hn=o(79830),an=o(47539),on=o(29879),ln=o.n(on),Z=o(27885),cn=o(96363);function k(c){var n;return c<=999?c:(n=Vn()(c).format("0.0a"))===null||n===void 0?void 0:n.toUpperCase()}function ue(c){var n=document.createElement("div");n.style.position="absolute",n.style.whiteSpace="nowrap",n.style.fontSize="12px",n.style.visibility="hidden",n.textContent=c,document.body.appendChild(n);var t=n.offsetWidth;return document.body.removeChild(n),t}var $e=function(n){return(0,hn.format)(n,{thousandsSeparator:","})},On=function(n){return n!==void 0?(0,an.Z)(Number(n)||0):"0ms"},Qn=function(n){return ln()(n||0)},Ps=function(n){if(n<=60)return n.toFixed(0)+"s";var t=Math.floor(n/60),s=n-t*60;return t+"m"+(s>=1?s.toFixed(0)+"s":"")};function jn(c,n){return n<=0?"0%":(c/n*100).toFixed(1)+"%"}function Ge(c){try{return JSON.parse(c),!0}catch(n){return cn.ZP.error("Invalid JSON string\uFF0CMay be caused by multiple profiles"),!1}}function Je(c){var n=Z.iv(c),t=btoa(String.fromCharCode.apply(null,n)),s=t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");return s}function Ke(c){for(var n,t,s=(n=c==null||(t=c.replace(/-/g,"+"))===null||t===void 0?void 0:t.replace(/_/g,"/"))!==null&&n!==void 0?n:"",a=atob(s),u=new Uint8Array(a.length),_=0;_<a.length;_++)u[_]=a.charCodeAt(_);var i=Z.ec(u,{to:"string"});return i}function Xe(c){var n=window.location.search.match(new RegExp("[?&]".concat(c,"=([^&]*)")));return n?decodeURIComponent(n[1]):null}var Yn=o(28520),un=o(29462),rn=o(78957),e=o(85893),Ve=function(n){var t=n.position,s=n.title;return(0,e.jsx)("div",{style:{left:t.x+"px",top:t.y+"px"},className:(0,X.Z)("databend-self-tooltip"),children:s})},Qe=Ve,Ye=o(13769),Nn=o.n(Ye),nt=o(50888),et=o(74330),tt=["className","children"],st=(0,e.jsx)(nt.Z,{style:{fontSize:24},spin:!0}),at=function(n){var t=n.className,s=n.children,a=Nn()(n,tt);return(0,e.jsx)(et.Z,d()(d()({style:{zIndex:2e3},className:t},a),{},{indicator:st,children:s}))},re=at,ot=function(n){var t=n.onButtonClick,s=n.title,a=n.subTitle,u=n.buttonText,_=n.buttonArea,i=n.loading,g=i===void 0?!1:i,f=n.width,S=f===void 0?"360px":f,R=n.paddingTop,x=R===void 0?"66px":R,j=n.TopIcon,A=a||"There is no related resource, you can try to refresh or create a new resource";return(0,e.jsx)(re,{spinning:g,children:(0,e.jsx)("div",{className:"profile-no-result-with-action",style:{paddingTop:x},children:(0,e.jsx)("div",{style:{width:S},className:"profile-no-result-with-action-wrap",children:(0,e.jsxs)(rn.Z,{direction:"vertical",className:"profile-no-result-with-action-content",size:12,children:[j&&(0,e.jsx)(un.ZP,{className:"pointer-events-none",icon:j}),(0,e.jsx)("div",{className:"profile-no-result-with-action-title",children:s}),a!==null&&(0,e.jsx)("div",{className:"profile-no-result-with-action-sub-title",children:A}),_?(0,e.jsx)(e.Fragment,{children:_}):(0,e.jsx)(e.Fragment,{children:u&&(0,e.jsx)(un.ZP,{onClick:function(P){return t&&t(P)},type:"primary",children:u})})]})})})})},lt=(0,C.memo)(ot),ct=function(n){var t=n.data,s=(0,C.useState)(""),a=q()(s,2),u=a[0],_=a[1];return(0,C.useEffect)(function(){if(t!=null&&t.length){var i="linear-gradient(90deg",g=0;t.forEach(function(f){i+=", ".concat(f.color," ").concat(g,"%"),g+=f.percent,i+=", ".concat(f.color," ").concat(g,"%")}),i+=")",_(i)}},[t]),(0,e.jsx)(e.Fragment,{children:u&&(0,e.jsx)("div",{style:{height:"8px",borderRadius:"4px",backgroundImage:u}})})},ut=(0,C.memo)(ct),rt=o(44107),_t={errorTip:"kCjZdetPcq0VpgDgIYRf"},it=o(42481),dt=o(56986),ht=o(20640),_e=o.n(ht),mt=function(n){var t=n.containerRef,s=n.className,a=n.copyText,u="Copy",_="Copied",i=(0,C.useState)(u),g=q()(i,2),f=g[0],S=g[1],R=function(){if(S(_),a)_e()(a);else if(t){var j;_e()(t==null||(j=t.current)===null||j===void 0?void 0:j.innerText)}};return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(un.ZP,{onMouseLeave:function(){return S(u)},onClick:function(){return R()},className:(0,X.Z)(s),type:"primary",children:f})})},pt=(0,C.memo)(mt),ie=function(n){var t=n.content,s=n.buttonText,a=n.isString,u=n.height,_=n.copyText,i=n.CustomArea,g=n.isBreakLine,f=(0,C.useRef)(null),S=a?t:JSON.stringify(JSON.parse(t),null,2);return(0,e.jsxs)("div",{style:{height:u+"px"},className:"db-code-content-container",children:[s&&(0,e.jsx)(un.ZP,{className:"db-code-content-button-text",style:{top:0,left:"20px",borderTopLeftRadius:0,borderTopRightRadius:0},type:"primary",children:s}),(0,e.jsx)("div",{className:"db-code-content-copy",children:(0,e.jsxs)(rn.Z,{children:[i&&i,(0,e.jsx)(pt,{className:"db-code-content--button",copyText:_||t,containerRef:f})]})}),(0,e.jsx)("div",{className:(0,X.Z)("db-code-content-block",g&&"db-code-content-break-line"),style:{fontWeight:500,whiteSpace:"pre-wrap"},ref:f,children:(0,e.jsx)(it.Z,{style:dt.Z,children:S})})]})};ie.defaultProps={buttonText:"Meta data",isString:!0,height:"auto",isBreakLine:!1};var ft=ie,vt=["content","children","buttonText"],de=function(n){var t=n.content,s=n.children,a=n.buttonText,u=Nn()(n,vt);return(0,e.jsx)(Yn.Z,d()(d()({overlayClassName:_t.errorTip,overlayInnerStyle:{padding:0},title:(0,e.jsx)(ft,{buttonText:a,content:t||""})},u),{},{children:s}))};de.defaultProps={buttonText:"Failed Text"};var he=de,bt=function(n){var t=n.icon,s=t===void 0?"databend-icon-xihuan_like":t,a=n.className,u=n.onClick,_=n.style,i=n.size,g=i===void 0?18:i;return(0,e.jsx)("span",{className:"g-box-c",children:(0,e.jsx)("i",{onClick:function(S){return u&&u(S)},className:(0,X.Z)("databend-icon-v2",s,a),style:d()(d()({},_),{},{fontSize:g+"px"})})})},_n=bt,yt=o(81763),me=o(18587);function pe(){var c=null;(0,yt.Z)(function(){c&&c()});function n(s){var a,u,_=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"body",i=(a=document)===null||a===void 0?void 0:a.querySelector(_);i&&(c=(0,me.ak)((u=document)===null||u===void 0?void 0:u.querySelector(_),function(){s.resize({animation:{duration:300,easing:"cubicInOut"}})}))}function t(s){var a,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"body";c=(0,me.ak)((a=document)===null||a===void 0?void 0:a.querySelector(u),function(){s()})}return{reshape:n,reshapeDOM:t}}var gt=function(n){var t=n.text,s=t===void 0?"0":t,a=n.roundColor,u=a===void 0?"#1C82F2":a,_=n.width,i=_===void 0?12:_,g=n.className,f=n.textClass,S=n.gap,R=S===void 0?8:S,x=n.wrapClass,j=x===void 0?"db-simple-legend-default":x,A=n.isInnerHtml,V=A===void 0?!1:A;return(0,e.jsxs)("span",{className:j,style:{gap:R+"px"},children:[(0,e.jsx)("span",{style:{backgroundColor:u,width:i+"px",height:i+"px",borderRadius:"50%",minWidth:"1px"},className:(0,X.Z)("db-simple-inline-block",g)}),s!==void 0&&s!==""&&(0,e.jsx)(e.Fragment,{children:V?(0,e.jsx)("span",{style:{flex:1},className:(0,X.Z)("db-simple-legend-text",f),dangerouslySetInnerHTML:{__html:s}}):(0,e.jsx)("span",{style:{flex:1},className:(0,X.Z)("db-simple-legend-text",f),children:s})})]})},fe=gt,xt=o(19632),Hn=o.n(xt),Ct=o(95271),wt=o(35322),ve="OutputRows";function be(c,n,t,s,a){return[["M",c+a,n],["l",t-a*2,0],["a",a,a,0,0,1,a,a],["l",0,s-a*2],["a",a,a,0,0,1,-a,a],["l",-t+a*2,0],["a",a,a,0,0,1,-a,-a],["l",0,-s+a*2],["a",a,a,0,0,1,a,-a],["Z"]]}var Tt=[["M",19.0374+2,60],["H",15],["C",10.7909+2,60,11,5.79086+56,11,64],["C",11,10.2091+56,10.7909+2,68,15,68],["H",19.1059+2],["C",17.8458+2,13.9437+56,15.7082+2,15.2309+56,13.2964+2,15.0062+56],["C",2.5+2,70,1,13.5+56,4,7.5+56],["C",-2.5+2,1.00616+56,9.5+2,.5+56,13.2964+2,1.00616+56],["C",15.6724+2,1.00616+56,17.772+2,2.18999+56,19.0374+2,60],["Z"]],St=[["M",125.5,-18],["L",131.9952,-6.75],["L",119.00481,-6.75],["L",125.5,-18],["Z"],["M",125.5,-1],["L",125.5,-7]];function Rt(c){if((c==null?void 0:c.length)<=2)return c;var n=1,t=4.5,s=c.map(function(i){return i._value}).filter(function(i){return i!==void 0}),a=Math.min.apply(Math,Hn()(s)),u=Math.max.apply(Math,Hn()(s)),_=function(g,f,S,R,x){var j=(g-f)/(S-f);return R+(x-R)*j};return c.forEach(function(i){i._value!==void 0?i.lineWidth=_(i._value,a,u,n,t):i.lineWidth=n}),c}function Ut(c){var n=-1;c.sort(function(s,a){return Number(s==null?void 0:s.id)-Number(a==null?void 0:a.id)});var t=c==null?void 0:c.map(function(s){var a=s.title,u=s.name,_=s.id,i=s.statisticsDescArray;n===-1&&(n=(i==null?void 0:i.findIndex(function(f){return f._type===ve}))||0);var g=i[n]._value;return d()(d()({},s),{},{id:_,outputRows:g,value:{title:((u==null?void 0:u.length)>=26?(u==null?void 0:u.slice(0,26))+"...":u||"  ")+" [".concat(_,"]"),items:[{text:a||"  "}]}})});return t}function kt(c){var n=-1;return c.sort(function(t,s){return Number(t==null?void 0:t.id)-Number(s==null?void 0:s.id)}),c==null?void 0:c.map(function(t){var s=t==null?void 0:t.statisticsDescArray;n===-1&&(n=(s==null?void 0:s.findIndex(function(_){return _._type===ve}))||0);var a=s[n]._value,u={source:t==null?void 0:t.parent_id,target:t==null?void 0:t.id};return a<=0?u:d()(d()({},u),{},{value:k(a),_value:a})})}var qt=function(n){var t=n.plainData,s=n.graphSize,a=n.graphSizeHeight,u=n.graphRef,_=n.isLight,i=n.overviewInfoCurrent,g=n.onReady,f=n.queryId,S=f===void 0?"analysis":f,R=n.onShare,x=R===void 0?void 0:R,j=function(){var T=u==null?void 0:u.current;T&&(T.fitView(),T.refresh())},A=Rt(kt(t)),V={nodes:Ut(t),edges:A},P={width:s,height:a},nn=d()(d()({},P),{},{autoFit:!1,onReady:g,data:V,layout:{rankdir:"TB",ranksepFunc:function(){return 20},sortBy:"id"},tooltipCfg:{show:!1},toolbarCfg:{show:!0,customContent:function(T){var w=T.zoomIn,h=T.zoomOut;return(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"g-cursor g-box-c",onClick:function(){return j()},children:(0,e.jsx)(_n,{size:16,icon:"databend-icon-quanping1"})}),(0,e.jsx)("span",{className:"g-cursor g-box-c",onClick:h,children:(0,e.jsx)(_n,{size:16,icon:"databend-icon-minus-bold"})}),(0,e.jsx)("span",{className:"g-cursor g-box-c",onClick:w,children:(0,e.jsx)(_n,{size:16,icon:"databend-icon-jia"})}),(0,e.jsx)("span",{className:"g-cursor g-box-c",onClick:function(){var G;return u==null||(G=u.current)===null||G===void 0?void 0:G.downloadFullImage("databend-profile-".concat(S),"image/png")},children:(0,e.jsx)(_n,{size:16,icon:"databend-icon-xiazai_download-four"})}),x&&(0,e.jsx)("span",{className:"g-cursor g-box-c",onClick:function(){x==null||x()},children:(0,e.jsx)(_n,{size:16,icon:"databend-icon-fenxiang_share-one"})})]})}},nodeCfg:{padding:10,size:[250,40],title:{autoEllipsis:!0,containerStyle:{fill:"transparent"},style:function(T){var w;return{fontWeight:600,fill:T!=null&&(w=T.errors)!==null&&w!==void 0&&w.length?"#fff":_?"#000":"#fff"}}},anchorPoints:[[.5,0],[.5,1]],style:function(T){var w;return{radius:5,fill:T!=null&&(w=T.errors)!==null&&w!==void 0&&w.length?"#f73920":_?"#fff":"#101",stroke:_?"#ccc":"#fff",filter:_?"drop-shadow(2px 2px 2px rgba(204, 204, 204, .3))":"drop-shadow(2px 3px 2px rgba(255, 255, 255, .2))"}},nodeStateStyles:{highlight:{stroke:"#2c91ff",lineWidth:2},hover:{stroke:"#2c91ff",lineWidth:2}},customContent:function(T,w,h){var $,G,D,J,M,tn,mn=h.startX,K=h.startY,yn=h.width,E=T.text;E=($=E)===null||$===void 0?void 0:$.replace(/\n/g," ");var Q=230,gn=(G=E)===null||G===void 0?void 0:G.length,L=w==null||(D=w.cfg)===null||D===void 0||(D=D.item)===null||D===void 0||(D=D._cfg)===null||D===void 0?void 0:D.model,pn=(L==null?void 0:L.totalTime)/(((J=i.current)===null||J===void 0?void 0:J.totalTime)||1),xn=L==null||(M=L.errors)===null||M===void 0?void 0:M.length,Sn=L==null?void 0:L.parent_id,dn=w.addShape("text",{attrs:{textBaseline:"top",x:mn,y:K,text:E,fill:xn?"rgba(255,255,255,0.8)":"#75767a",textAlign:"left"},name:"text-".concat(Math.random())}),Bn=dn.getBBox().width;if(gn>26&&Bn>yn){var An,Zn=((An=E)===null||An===void 0?void 0:An.slice(0,Math.floor(yn/Bn*gn-3)))+"...";dn.attr("text",Zn)}var Pn=(tn=dn==null?void 0:dn.getBBox().height)!==null&&tn!==void 0?tn:0,Un=8,Y=4,I=pn*Q,ee=be(mn,K+Pn+10,Q,Un,Y);w.addShape("path",{attrs:{path:ee,fill:"#f2f2f2"},name:"progress-bg-".concat(Math.random())});var Fn=be(mn,K+Pn+10,I,Un,Y);if(w.addShape("path",{attrs:{path:Fn,fill:I<=0?"rgba(0,0,0,0)":"rgb(1, 117, 246)"},name:"progress-fg-".concat(Math.random())}),I>0&&I<9&&w.addShape("path",{attrs:{path:Tt,fill:xn?"#f73920":_?"#fff":"#101"},name:"circle-path-bg-".concat(Math.random())}),Sn==="null"){var En=A==null?void 0:A.find(function(Mn){return(Mn==null?void 0:Mn.source)==="null"});w.addShape("path",{attrs:{path:St,fill:"#ccc",stroke:"#ccc",lineWidth:(En==null?void 0:En.lineWidth)||1},name:"percentage-output-text-".concat(Math.random())});var $n=k(L==null?void 0:L.outputRows);w.addShape("text",{attrs:{textBaseline:"top",x:125+ue($n)/2,y:-30,text:$n,fill:_?"rgba(12, 22, 43, 0.6)":"#fff",fontWeight:"bold",fontSize:12,textAlign:"right"},name:"percentage-output-text"})}var te=pn>0?"".concat((pn*100).toFixed(1),"%"):"0%";return w.addShape("text",{attrs:{textBaseline:"top",x:mn+yn,y:K-27,text:te,fill:xn?"#fff":_?"#000":"#fff",fontSize:11,textAlign:"right"},name:"percentage-text-".concat(Math.random())}),Math.max(Pn,Un)}},edgeCfg:{type:"cubic-vertical",endArrow:!1,style:function(T){var w=(T==null?void 0:T.lineWidth)||1;return{lineWidth:w}},label:{style:{fontWeight:600,fill:_?"rgba(12, 22, 43, 0.6)":"#fff"}},startArrow:{type:"triangle"}},graphCfg:{containerStyle:{backgroundColor:"#f0f0f0"}},markerCfg:function(T){var w;return{animate:!0,position:"bottom",show:(w=V.edges.filter(function(h){return h.source===T.id}))===null||w===void 0?void 0:w.length}},behaviors:["drag-canvas",{type:"zoom-canvas",sensitivity:.4}]});return(0,e.jsx)(Ct.Z,d()({},nn))},jt=(0,C.memo)(qt,function(c,n){var t=(0,wt.Z)(c.plainData,n.plainData),s=c.graphSize===n.graphSize,a=c.graphSizeHeight===n.graphSizeHeight,u=c.isLight===n.isLight;return t&&s&&a&&u}),Nt=o(9783),ye=o.n(Nt),Ht=o(25968),At=o(6226),Pt=o(25944),Et=o(7660),Mt=o(47221),Lt=["children"],zt=function(n){var t=n.children,s=Nn()(n,Lt);return(0,e.jsx)(un.ZP,d()(d()({},s),{},{className:(0,X.Z)(s.className,"db-reset-white-button"),style:d()({gap:"6px"},s==null?void 0:s.style),children:t}))},Dt=zt,It=["padding","borderRadius","children","className","isNeedBorder","isJader","onClick","height"],ge=function(n){var t=n.padding,s=n.borderRadius,a=n.children,u=n.className,_=n.isNeedBorder,i=n.isJader,g=n.onClick,f=n.height,S=Nn()(n,It),R=t===void 0?[20,20,20,20]:t,x=Array.isArray(R);return(0,e.jsx)("div",d()(d()({onClick:g,className:(0,X.Z)("db-card-wrap-out",u,_&&"db-card-wrap-border",i&&"db-card-wrap-jader"),style:d()(d()({},x?{paddingTop:R[0]+"px",paddingRight:R[1]+"px",paddingBottom:R[2]+"px",paddingLeft:R[3]+"px"}:{padding:t+"px"}),{},{height:f==="auto"?"auto":f+"px",borderRadius:"".concat(s,"px")})},S),{},{children:a}))};ge.defaultProps={padding:[20,20,20,20],borderRadius:6,isNeedBorder:!0,height:"auto",isJader:!1};var Wt=ge,Ot=o(49677),Bt=o.n(Ot),Zt=o(55171),Ft=o.n(Zt),$t=function(n){var t=Object.assign({},(Bt()(n),n));return(0,e.jsx)(Ft(),d()(d()({style:{padding:"10px",borderRadius:"4px"},displayDataTypes:!1,theme:"ashes"},t),{},{src:(t==null?void 0:t.src)||{}}))},xe=$t,Ce=o(78234),we=o(64665),Te=o(97369),Gt=o(49956),Jt=o(47008),Kt=o(78537),Se=o(27067),Xt=o(31825),Re=o(35183),Vt=o(11415),Ue=o(79016),ke=o(6228);Re.D([Gt.N,Jt.N,Kt.N,Se.N,Xt.N,we.N,Te.N,ke.N,Ue.z]),Re.D([Se.N,we.N,Te.N,ke.N,Ue.z]);var Qt=function(n){var t=n.series,s=n.legendData,a=n.xData,u=n.isLight,_=(0,C.useRef)(null),i=pe(),g=i.reshape,f=u?"rgba(1, 14, 41, 0.08)":"rgba(255, 255, 255, 0.08)",S=u?"rgba(12, 22, 43, 0.6)":"rgba(249, 249, 249, 0.6)";return(0,Ce.Z)(function(){var R=Vt.S1(_.current),x={tooltip:{trigger:"axis"},legend:{type:"scroll",data:s},grid:{left:"13%",right:"9%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:a,axisLine:{lineStyle:{color:f}},axisLabel:{showMinLabel:!0,showMaxLabel:!0,color:S,margin:8},axisTick:{show:!1}},yAxis:{offset:30,type:"value"},series:t};R.setOption(x),setTimeout(function(){g(R,".profile-metrics-collapseWrap")},100)}),(0,e.jsx)("div",{style:{height:"280px",width:"100%"},ref:_})},Yt=(0,C.memo)(Qt),ns=["isLight","metricsData","drawerWidth"];function ne(c){var n,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return c?(n=Object.values(c))===null||n===void 0?void 0:n.sort(function(s,a){return s==null?void 0:s.localeCompare(a)}).join(" "):t||"No labels"}function es(c){return c.map(function(n){var t=Object.keys(n.value)[0],s=t==="Histogram",a=t==="Summary",u=s||a;if(!n.labels&&!u)return{name:n.name,columns:[{title:t,key:t,dataIndex:t}],data:[ye()({},t,n.value[t])],labels:n.labels?n.labels:null,value:n.value};if(u){var _=s?n.value.Histogram:n.value.Summary,i=[],g=[];return i=_.map(function(x){return s?x.less_than:x.quantile}),g=_.map(function(x){return x.count}),{isChart:!0,name:n.name,_tag:ne(n.labels,n.name),columns:i,data:[g],labels:n.labels,value:n.value,type:t}}var f=Object.keys(n.labels),S=f.map(function(x){return{title:x,key:x,dataIndex:x}}).concat({title:t,key:t,dataIndex:t}),R=[d()(d()({},n.labels),{},ye()({},t,n.value[t]))];return{name:n.name,columns:S,data:R,labels:n.labels,value:n.value}})}function ts(c){var n={};return c.forEach(function(t){if(!n[t.name])n[t.name]=d()(d()({},t),{},{labelsArr:[d()(d()({},t.labels),{},{_tag:ne(t.labels,t.name)})]}),delete n[t.name].labels;else if(t!=null&&t.type)n[t.name].data=[].concat(Hn()(n[t.name].data),Hn()(t.data)),n[t.name].labelsArr.push(d()(d()({},t.labels),{},{_tag:ne(t.labels,t.name)}));else{var s;(s=n[t.name].data).push.apply(s,Hn()(t.data))}}),Object.values(n)}function ss(c){return c==null?void 0:c.map(function(n){return{machine:n[0],data:ts(es(n[1]).sort(function(t,s){if((t==null?void 0:t.name)===(s==null?void 0:s.name)){var a;return s==null||(a=s._tag)===null||a===void 0?void 0:a.localeCompare(t==null?void 0:t._tag)}return 0}).sort(function(t,s){return!(t!=null&&t.type)&&!(s!=null&&s.type)?0:t!=null&&t.type?s!=null&&s.type?t.type.localeCompare(s==null?void 0:s.type):1:-1}))}})}var as=function(n){var t=n.isLight,s=n.metricsData,a=n.drawerWidth,u=a===void 0?"100vw":a,_=Nn()(n,ns),i=(0,C.useState)(!1),g=q()(i,2),f=g[0],S=g[1],R=(0,C.useState)([]),x=q()(R,2),j=x[0],A=x[1];(0,C.useEffect)(function(){if(s){var P=Object.entries(s),nn=ss(P);A(nn)}},[s]);var V=j==null?void 0:j.map(function(P,nn){var F,T=P==null||(F=P.data)===null||F===void 0?void 0:F.length,w=T%2!==0;return{key:nn.toString(),label:(0,e.jsxs)("div",{className:"profile-metrics-header",children:["Machine ",nn+1,":",P==null?void 0:P.machine]}),children:(0,e.jsx)(Ht.Z,{gutter:[16,16],className:"profile-metrics-row",children:P==null?void 0:P.data.map(function(h,$){var G,D;return(0,C.createElement)(At.Z,{xl:12,xxl:12,lg:24,md:24,sm:24,xs:24,className:"profile-metrics-col",span:w&&T-1===$?24:12,key:"".concat(nn,"_").concat(h==null?void 0:h.name,"_").concat($)},(0,e.jsx)("div",{className:"profile-metrics-name",children:h==null?void 0:h.name}),h!=null&&h.data?(0,e.jsx)(e.Fragment,{children:h!=null&&h.type?(0,e.jsx)(Yt,{isLight:t,series:h==null||(G=h.data)===null||G===void 0?void 0:G.map(function(J,M){var tn;return{type:"bar",data:J,name:h==null||(tn=h.labelsArr[M])===null||tn===void 0?void 0:tn._tag}}),legendData:h==null||(D=h.labelsArr)===null||D===void 0?void 0:D.map(function(J){return J==null?void 0:J._tag}),xData:h==null?void 0:h.columns}):(0,e.jsx)(Pt.Z,{rowKey:function(M){return(M==null?void 0:M.key)||"row-key-"+Math.random()},className:"profile-metrics-table",pagination:!1,dataSource:h==null?void 0:h.data,columns:h==null?void 0:h.columns})}):(0,e.jsx)(Wt,{children:JSON.stringify(h==null?void 0:h.value)}))})})}});return(0,e.jsx)(Et.Z,d()(d()({destroyOnClose:!0,width:u},_),{},{title:(0,e.jsxs)(rn.Z,{children:[(0,e.jsx)("span",{children:_==null?void 0:_.title}),(0,e.jsx)(Dt,{onClick:function(){return S(!f)},children:(0,e.jsxs)(rn.Z,{size:4,children:[(0,e.jsx)(_n,{size:14,icon:"databend-icon-qiehuan_switch"}),f?"Chart View":"Metrics JSON"]})})]}),children:(0,e.jsx)(e.Fragment,{children:f?(0,e.jsx)(xe,{src:s}):(0,e.jsx)(Mt.Z,{className:"profile-metrics-collapseWrap",expandIconPosition:"start",defaultActiveKey:Array.from({length:(j==null?void 0:j.length)+1},function(P,nn){return nn.toString()}),items:V})})}))},os=as,ls="CpuTime",cs="WaitTime";function us(c){return c==null?void 0:c.map(function(n){var t,s,a,u=Object.keys(n)[0];return{_errorType:u,message:((t=n[u])===null||t===void 0?void 0:t.message)||"",detail:((s=n[u])===null||s===void 0?void 0:s.detail)||"",backtrace:((a=n[u])===null||a===void 0||(a=a.backtrace)===null||a===void 0||(a=a.build_id)===null||a===void 0?void 0:a.join(","))||""}})}function rs(c,n){return c==="Bytes"?$e(n):c==="Rows"||c==="Count"?Qn(n):c==="MillisSeconds"?On(n):c==="NanoSeconds"?On(n/1e6):n}var _s=function(n){var t,s,a,u,_=n.profileRef,i=n.queryDuration,g=n.queryId,f=g===void 0?"analysis":g,S=n.outValue,R=n.countShow,x=n.offsetWidth,j=x===void 0?400:x,A=n.offsetHeight,V=A===void 0?150:A,P=n.showTextArea,nn=P===void 0?!0:P,F=n.initLoading,T=F===void 0?!1:F,w=n.isNeedMetrics,h=w===void 0?!1:w,$=n.isDemo,G=$===void 0?!1:$,D=n.isLight,J=D===void 0?!0:D,M=n.getActiveName,tn=M===void 0?null:M,mn=n.getOverviewInfo,K=mn===void 0?null:mn,yn=n.ErrorTicketDom,E=yn===void 0?(0,e.jsx)(e.Fragment,{}):yn,Q=n.isAdmin,gn=Q===void 0?!1:Q,L=n.onShare,pn=L===void 0?void 0:L,xn=n.responseDom,Sn=xn===void 0?"body":xn,dn=n.drawerWidth,Bn=dn===void 0?"100vw":dn,An=(0,B.Z)(0),Zn=q()(An,2),Pn=Zn[0],Un=Zn[1],Y=(0,C.useRef)(null),I=(0,C.useRef)(null),ee=(0,B.Z)(window.innerHeight-150),Fn=q()(ee,2),En=Fn[0],$n=Fn[1],te=pe(),Mn=te.reshapeDOM,sn=(0,C.useRef)(void 0),bs=(0,B.Z)([]),je=q()(bs,2),W=je[0],ys=je[1],Cn=(0,C.useRef)(void 0),gs=(0,B.Z)(!0),Ne=q()(gs,2),He=Ne[0],se=Ne[1],xs=(0,B.Z)(""),Ae=q()(xs,2),Gn=Ae[0],Pe=Ae[1],Cs=(0,B.Z)([]),Ee=q()(Cs,2),fn=Ee[0],ws=Ee[1],Ts=(0,B.Z)([]),Me=q()(Ts,2),kn=Me[0],Ss=Me[1],Rs=(0,B.Z)(!1),Le=q()(Rs,2),Us=Le[0],ze=Le[1],ks=(0,B.Z)({clientX:0,clientY:0,show:!1,text:""}),De=q()(ks,2),wn=De[0],ae=De[1],qs=(0,B.Z)({cpuTime:0,waitTime:0,isTotalBigerZero:!1,totalTime:0,totalTimePercent:"0%",labels:void 0,statisticsDescArray:[],metrics:null}),Ie=q()(qs,2),r=Ie[0],oe=Ie[1];function js(l){var v,y,p,b=l==null?void 0:l.profiles,N=l==null?void 0:l.statistics_desc,U=(v=N[ls])===null||v===void 0?void 0:v.index,H=(y=N[cs])===null||y===void 0?void 0:y.index,O=0,vn=0,Ln=[];b==null||b.forEach(function(m){m.id=String(m.id),m.parent_id=String(m.parent_id);var bn=m==null?void 0:m.errors,le=m==null?void 0:m.statistics[U],ce=m==null?void 0:m.statistics[H];m.totalTime=le+ce,m.cpuTime=le,m.waitTime=ce,O+=le,vn+=ce,m.errors=(bn==null?void 0:bn.length)>0?us(m==null?void 0:m.errors):[],m.statisticsDescArray=Object.entries(N).map(function(Hs){var Fe=q()(Hs,2),As=Fe[0],z=Fe[1];return{_type:As,desc:z==null?void 0:z.desc,display_name:(z==null?void 0:z.display_name)||(z==null?void 0:z.displayName),index:z==null?void 0:z.index,unit:z.unit,plain_statistics:z==null?void 0:z.plain_statistics,_value:m.statistics[z==null?void 0:z.index]}})});var Tn=O+vn;b==null||b.forEach(function(m){m.totalTimePercent=jn(m==null?void 0:m.totalTime,Tn),m.cpuTimePercent=jn(m==null?void 0:m.cpuTime,m.totalTime),m.waitTimePercent=jn(m==null?void 0:m.waitTime,m.totalTime)}),ys(b),ws((p=(0,rt.Z)(b))===null||p===void 0||(p=p.filter(function(m){return parseFloat(m.totalTimePercent)>.09}))===null||p===void 0?void 0:p.sort(function(m,bn){return bn.totalTime-m.totalTime}));var zn=jn(O,Tn),qn=jn(vn,Tn),Dn={cpuTime:O,waitTime:vn,totalTime:Tn,totalTimePercent:"100%",cpuTimePercent:zn,waitTimePercent:qn,statisticsDescArray:Ln,isNode:!1,errors:[]};Cn.current=Dn,oe(Dn),K==null||K(Dn)}function Ns(){var l=sn==null?void 0:sn.current;l&&sn.current.fitView()}var Jn=function(){_&&Un(G?700:(_==null?void 0:_.offsetWidth)-j),$n(window.innerHeight-V)};(0,C.useEffect)(function(){tn&&tn(Gn)},[Gn]),(0,C.useEffect)(function(){if(S)try{js(S)}catch(l){cn.ZP.destroy(),cn.ZP.warning("Incorrect data")}},[R,S]),(0,C.useEffect)(function(){T&&sn!==null&&sn!==void 0&&sn.current&&Ns()},[T]),(0,C.useEffect)(function(){W!=null&&W.length&&Jn()},[W,nn]),(0,C.useEffect)(function(){if(I!=null&&I.current&&(W==null?void 0:W.length)>0){var l=I.current.querySelector("canvas");l&&Y!==null&&Y!==void 0&&Y.current?Y.current=l:console.warn("No canvas found inside profileWrapRef or profileWrapRefCanvas is null")}},[W]),(0,C.useEffect)(function(){var l=[];if(gn){var v;l=r==null||(v=r.statisticsDescArray)===null||v===void 0?void 0:v.filter(function(p){return p._value>0})}else{var y;l=r==null||(y=r.statisticsDescArray)===null||y===void 0?void 0:y.filter(function(p){return p._value>0&&(p==null?void 0:p.plain_statistics)})}Ss(l)},[r==null?void 0:r.statisticsDescArray]),(0,C.useEffect)(function(){Jn(),Mn(function(){Jn()},Sn)},[]);function We(l){var v=l.totalTime,y=l.totalTimePercent,p=l.cpuTime,b=l.waitTime,N=l.cpuTimePercent,U=l.waitTimePercent,H=l.id,O=l.isNode,vn=l.labels,Ln=l.statisticsDescArray,Tn=l.name,zn=l.errors;Pe(H);var qn={cpuTime:p,waitTime:b,totalTime:v,totalTimePercent:y,cpuTimePercent:N,waitTimePercent:U,labels:vn,statisticsDescArray:Ln,isNode:O,name:Tn,id:H,metrics:l==null?void 0:l.metrics,errors:zn};oe(qn),K==null||K(qn)}function Oe(l){return(l==null?void 0:l.getNodes())||[]}function Be(l,v){l&&v&&l.setItemState(v,"highlight",!0)}function Ze(l){var v=Oe(l);v.forEach(function(y){l&&l.clearItemStates(y)})}function Kn(){ae({clientX:0,clientY:0,show:!1,text:""})}return(0,e.jsxs)(e.Fragment,{children:[(wn==null?void 0:wn.show)&&(0,e.jsx)(Qe,{position:{x:wn==null?void 0:wn.clientX,y:wn.clientY},title:wn.text}),(0,e.jsxs)("div",{ref:I,className:"profile-index-container",children:[(W==null?void 0:W.length)>0&&(0,e.jsxs)("div",{className:"profile-index-details-info",children:[(fn==null?void 0:fn.length)>0&&(0,e.jsxs)("div",{className:"profile-index-top-ranking",children:[(0,e.jsxs)("div",{className:"profile-indx-most-expensive-nodes",children:[" ","Most Expensive Nodes",(0,e.jsxs)("span",{className:"profile-index-ranking-length",children:[" ","(",fn==null?void 0:fn.length," of ",W==null?void 0:W.length,")"]})]}),(0,e.jsx)("div",{style:{marginTop:"8px"},children:fn==null?void 0:fn.map(function(l,v){return(0,e.jsxs)("div",{onClick:function(){var p,b,N=l==null?void 0:l.id;if(Gn!==N){We(d()(d()({},l),{},{isNode:!0})),se(!1);var U=sn==null?void 0:sn.current,H=U==null?void 0:U.cfg.nodes,O=H==null?void 0:H.find(function(bn){return(bn==null?void 0:bn._cfg.id)===N}),vn=U==null?void 0:U.getZoom(),Ln=O==null||(p=O._cfg)===null||p===void 0||(p=p.bboxCache)===null||p===void 0?void 0:p.x,Tn=O==null||(b=O._cfg)===null||b===void 0||(b=b.bboxCache)===null||b===void 0?void 0:b.y,zn=U==null?void 0:U.getWidth(),qn=U==null?void 0:U.getHeight(),Dn=zn/2-Ln*vn,m=qn/2-Tn*vn+20;Ze(U),Be(U,O),(H==null?void 0:H.length)>1&&U&&U.moveTo(Dn,m)}},className:(0,X.Z)("profile-index-top-item-style",Gn===l.id&&"profile-index-top-active-item-style"),children:[(0,e.jsxs)("span",{children:[l.name," [",l.id,"]"]}),(0,e.jsx)("span",{className:"profile-index-top-item-time",children:l.totalTimePercent})]},v)})})]}),(0,e.jsxs)("div",{className:(0,X.Z)("profile-index-top-ranking","profile-common-styles-pm"),children:[(0,e.jsxs)("div",{className:"profile-common-styles-few g-box-center-between",children:[(0,e.jsxs)("div",{children:["Profile Overview",(0,e.jsxs)("span",{className:"profile-index-color-text-2",children:[" ",He&&"(Finished)"]})]}),!He&&h&&(0,e.jsx)(Yn.Z,{title:r!=null&&r.metrics?void 0:"No Metrics",children:(0,e.jsx)(un.ZP,{disabled:!(r!=null&&r.metrics),onClick:function(){return ze(!0)},type:"primary",size:"small",children:(0,e.jsxs)(rn.Z,{size:4,children:[r!=null&&r.metrics?(0,e.jsx)(_n,{icon:"databend-icon-yulan-dakai_preview-open"}):(0,e.jsx)(_n,{icon:"databend-icon-yulan-guanbi_preview-close-one"}),"Metrics"]})})})]}),(0,e.jsxs)("div",{className:"g-mt-8",children:[r.isNode?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"g-t-right",children:r==null?void 0:r.totalTimePercent}),(0,e.jsx)(ut,{data:[{color:"rgb(28, 130, 242)",percent:parseFloat(r.cpuTimePercent)},{color:"rgb(255, 152, 0)",percent:parseFloat(r.waitTimePercent)}]})]}):(0,e.jsxs)("div",{className:"profile-common-styles-bcpc",children:[(0,e.jsx)("span",{children:"Total Execution Time"}),(0,e.jsxs)("span",{className:"profile-index-color-text-1",children:[(0,e.jsxs)("span",{className:"profile-index-color-text-2",children:["(",On(S?(r==null?void 0:r.totalTime)/1e6:i),")"]})," ",r==null?void 0:r.totalTimePercent]})]}),(0,e.jsxs)("div",{className:"profile-common-styles-bcpc",children:[(0,e.jsx)(fe,{width:5,text:"CPU Time",textClass:"profile-index-color-text-2"}),(0,e.jsx)("span",{className:"profile-index-color-text-1",children:r==null?void 0:r.cpuTimePercent})]}),(0,e.jsxs)("div",{className:"profile-common-styles-bcpc",children:[(0,e.jsx)(fe,{width:5,roundColor:"rgb(255, 152, 0)",text:"I/O Time",textClass:"profile-index-color-text-2"}),(0,e.jsx)("span",{className:"profile-index-color-text-1",children:r==null?void 0:r.waitTimePercent})]})]})]}),(r==null||(t=r.errors)===null||t===void 0?void 0:t.length)>0&&(0,e.jsxs)("div",{className:(0,X.Z)("profile-index-top-ranking","profile-index-top-ranking-errors","profile-common-styles-pm"),children:[(0,e.jsxs)(rn.Z,{className:"profile-common-styles-few g-color-text-danger",children:["Errors",E&&E]}),r==null||(s=r.errors)===null||s===void 0?void 0:s.map(function(l,v){return(0,e.jsxs)("div",{className:"g-mt-10",children:[(0,e.jsx)("div",{className:"profile-index-color-text-1",children:l==null?void 0:l._errorType}),(0,e.jsxs)("div",{className:"profile-common-styles-gbp profile-index-color-text-2",children:[(0,e.jsxs)("div",{className:"g-class-ellipsis",children:["message:",(0,e.jsx)(he,{placement:"rightTop",destroyTooltipOnHide:!0,content:l==null?void 0:l.message,buttonText:"message",children:l==null?void 0:l.message})]}),(0,e.jsxs)("div",{className:"g-class-ellipsis",children:["detail:",(0,e.jsx)(Yn.Z,{destroyTooltipOnHide:!0,title:l==null?void 0:l.detail,children:l==null?void 0:l.detail})]}),(0,e.jsxs)("div",{className:"g-class-ellipsis",children:["backtrace:",(0,e.jsx)(he,{placement:"rightTop",destroyTooltipOnHide:!0,content:l==null?void 0:l.backtrace,buttonText:"backtrace",children:l==null?void 0:l.backtrace})]})]})]},v)})]}),(kn==null?void 0:kn.length)>0&&(0,e.jsxs)("div",{className:(0,X.Z)("profile-index-top-ranking","profile-common-styles-pm"),children:[(0,e.jsx)("div",{className:"profile-common-styles-few",children:"Statistics"}),(0,e.jsx)("div",{className:"g-mt-8",children:kn==null?void 0:kn.map(function(l,v){return(0,e.jsxs)("div",{className:"profile-common-styles-bcpc",children:[(0,e.jsx)("span",{children:l==null?void 0:l.display_name}),(0,e.jsx)("span",{className:"profile-index-color-text-1",children:rs(l.unit,l==null?void 0:l._value)})]},v)})})]}),(r==null||(a=r.labels)===null||a===void 0?void 0:a.length)>0&&(0,e.jsxs)("div",{className:(0,X.Z)("profile-index-top-ranking","profile-common-styles-pm"),children:[(0,e.jsx)("div",{className:"profile-common-styles-few",children:"Attributes"}),r==null||(u=r.labels)===null||u===void 0?void 0:u.map(function(l,v){var y;return(0,e.jsxs)("div",{className:"g-mt-10",children:[(0,e.jsx)("div",{className:"profile-index-color-text-1",children:l==null?void 0:l.name}),(0,e.jsx)("div",{children:(0,e.jsx)("div",{className:"profile-common-styles-gbp profile-index-color-text-2",children:l==null||(y=l.value)===null||y===void 0?void 0:y.map(function(p){return(0,e.jsx)("div",{style:{wordWrap:"break-word"},children:p},p)})})})]},v)})]})]}),T?(0,e.jsx)("div",{className:"g-box-c",style:{height:"700px"},children:(0,e.jsx)(re,{})}):(0,e.jsx)(e.Fragment,{children:(W==null?void 0:W.length)>0?(0,e.jsx)(jt,{onShare:pn,queryId:f,plainData:W,graphSize:Pn,graphSizeHeight:En,graphRef:sn,isLight:J,handleResize:Jn,overviewInfoCurrent:Cn,onReady:function(v){v&&(sn.current=v,v.setMaxZoom(2),v.on("node:click",function(y){se(!1);var p=y.item._cfg.model;We(d()(d()({},p),{},{isNode:!0}));var b=Oe(v),N=y.item._cfg.id,U=b==null?void 0:b.find(function(H){return(H==null?void 0:H._cfg.id)===N});b==null||b.filter(function(H){return H._cfg.id!==N}).forEach(function(H){v&&v.clearItemStates(H)}),Be(v,U)}),v.on("node:mouseleave",function(){Y!=null&&Y.current&&(Y.current.style.cursor="move"),Kn()}),v.on("node:mouseover",function(y){var p,b=y==null||(p=y.target)===null||p===void 0||(p=p.cfg)===null||p===void 0?void 0:p.name;if(b!=null&&b.includes("percentage-output-text")){var N,U=y.clientX,H=y.clientY,O=y==null||(N=y.item)===null||N===void 0||(N=N._cfg)===null||N===void 0||(N=N.model)===null||N===void 0?void 0:N.outputRows;ae({clientX:U-70,clientY:H-52,show:!0,text:"Output Rows: ".concat(Qn(O))})}else Kn()}),v.on("canvas:click",function(){Pe(""),se(!0),oe(Cn==null?void 0:Cn.current),K==null||K(Cn==null?void 0:Cn.current),Ze(v)}),v.on("canvas:dragstart",function(){I!=null&&I.current&&(I.current.style.userSelect="none")}),v.on("canvas:dragend",function(){I!=null&&I.current&&(I.current.style.userSelect="unset")}),v.on("edge:mouseover",function(y){var p,b,N=y==null||(p=y.target)===null||p===void 0||(p=p.cfg)===null||p===void 0?void 0:p.type,U=y==null||(b=y.item)===null||b===void 0||(b=b._cfg)===null||b===void 0||(b=b.model)===null||b===void 0?void 0:b._value,H=y.clientX,O=y.clientY;N==="text"?ae({clientX:H-40,clientY:O-50,show:!0,text:"Rows: ".concat(Qn(U))}):Kn()}),v.on("edge:mouseleave",function(){Y!=null&&Y.current&&(Y.current.style.cursor="move"),Kn()}))}}):(0,e.jsx)("div",{style:{minHeight:"700px"},children:(0,e.jsx)(lt,{title:"No Profile",paddingTop:"150px",subTitle:(0,e.jsxs)("div",{children:["Some queries, such as those with"," ",(0,e.jsx)("span",{style:{fontWeight:700},children:"USE"})," and"," ",(0,e.jsx)("span",{style:{fontWeight:700},children:"DESCRIBE"})," ","statements, have no query profile."]}),TopIcon:(0,e.jsx)(_n,{icon:"databend-icon-zuzhijiagou"})})})})]}),(0,e.jsx)(os,{drawerWidth:Bn,isLight:J,metricsData:r==null?void 0:r.metrics,title:"Metrics Details: ".concat(r==null?void 0:r.name,"[").concat(r==null?void 0:r.id,"]  ").concat(r==null?void 0:r.totalTimePercent),onClose:function(){return ze(!1)},open:Us})]})},qe=(0,C.memo)(_s),is=o(88484),ds=o(71090),hs=o(58206),ms=o(55753),ps=ds.Z.TextArea,fs=function(n){var t,s=n.isDemo,a=s===void 0?!1:s,u=n.isNeedMetrics,_=u===void 0?!1:u,i=n.canShare,g=i===void 0?!1:i,f=n.showBack,S=f===void 0?!0:f,R=(0,C.useRef)(null),x=(0,C.useState)(""),j=q()(x,2),A=j[0],V=j[1],P=(0,C.useState)(""),nn=q()(P,2),F=nn[0],T=nn[1],w=(0,C.useState)(0),h=q()(w,2),$=h[0],G=h[1],D=(0,C.useState)(!1),J=q()(D,2),M=J[0],tn=J[1];(0,Ce.Z)(function(){if(g){var E=Ke(Xe("value"));E&&V(E)}});function mn(){G($+1);try{var E;T((E=JSON.parse(A))===null||E===void 0?void 0:E.query_id)}catch(Q){}}var K=function(Q){var gn,L=(gn=Q.target.files)===null||gn===void 0?void 0:gn[0];if(L){if(L.type.startsWith("image/"))cn.ZP.error("Please select a non-image file");else{var pn=new FileReader;pn.onload=function(xn){var Sn,dn=(Sn=xn.target)===null||Sn===void 0?void 0:Sn.result;V(dn),cn.ZP.success("File content loaded successfully")},pn.onerror=function(){cn.ZP.error("Failed to read the file")},pn.readAsText(L)}Q.target.value=""}},yn=function(){var Q;(Q=R.current)===null||Q===void 0||Q.click()};return(0,e.jsxs)("div",{className:"g-pa-24 g-align-s site-layout-right",style:{gap:"12px"},children:[(0,e.jsxs)(rn.Z,{size:12,className:"g-pl-10 g-pr",direction:"vertical",children:[!M&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(is.Z,{style:{fontSize:"18px",color:"var(--color-text-2)",right:"10px",top:"30px",position:"absolute",zIndex:1,cursor:"pointer"},onClick:yn}),(0,e.jsx)("input",{type:"file",ref:R,style:{display:"none"},onChange:K,accept:"application/json,text/plain,.ts,.tsx,.sql,.csv"}),(0,e.jsx)(ps,{placeholder:"Please copy the profile log json you generated",className:"g-border-radius-middle g-border g-color-bg-1",value:A,onChange:function(Q){V(Q.target.value)},style:{width:"320px",height:"calc(100vh - 100px)"}}),(0,e.jsxs)(rn.Z,{className:"g-box-center-between",children:[(0,e.jsxs)(rn.Z,{children:[S&&(0,e.jsx)(un.ZP,{type:"link",href:"/",children:"Back"}),(0,e.jsx)(un.ZP,{type:"dashed",onClick:function(){V(ms.DEMO),mn()},children:"Demo"})]}),(0,e.jsxs)(rn.Z,{children:[(0,e.jsx)(un.ZP,{disabled:!A,type:"primary",onClick:function(){return G($+1)},children:"Show"}),(0,e.jsx)(un.ZP,{onClick:function(){V("")},children:"Clear"})]})]})]}),(0,e.jsx)(un.ZP,{style:{position:"fixed",bottom:"80px",left:"10px",zIndex:10},type:"primary",onClick:function(){tn(!M)},icon:(0,e.jsx)(_n,{icon:M?"databend-icon-zhankai_expand-left":"databend-icon-zhankai_expand-right"})})]}),(0,e.jsx)("div",{className:"g-pa-6 g-color-bg-1 g-box-flex g-border-radius-middle",style:{cursor:"pointer"},children:(0,e.jsx)(qe,{onShare:g?function(){(0,hs.Z)(window.location.origin+window.location.pathname+"?value="+Je(A)),cn.ZP.success("Copied to clipboard")}:void 0,offsetWidth:a?M?900:1200:M?100:695,isNeedMetrics:_,offsetHeight:60,countShow:$,outValue:A&&Ge(A)?JSON.parse(A):"",showTextArea:M,queryId:F,queryDuration:0,profileRef:(t=document)===null||t===void 0?void 0:t.body})})]})},vs=fs},14633:function(In,en,o){o.r(en),o.d(en,{texts:function(){return d}});var Rn=o(97753);const d=[{value:`outValue?: JSON;
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

`,paraId:0,tocIndex:2}]},45760:function(In,en){en.Z=`export const DEMO = \`{
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
