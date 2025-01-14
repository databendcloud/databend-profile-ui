"use strict";(self.webpackChunkdatabend_profile_ui=self.webpackChunkdatabend_profile_ui||[]).push([[152],{25840:function(Mn,$,o){o.r($),o.d($,{demos:function(){return $n}});var bn=o(15009),i=o.n(bn),Gn=o(99289),k=o.n(Gn),z=o(67294),W=o(97753),T=o(61712),zn=o(55753),$n={"queryprofile-demo-0":{component:z.memo(z.lazy(k()(i()().mark(function nn(){var K,X,V,I;return i()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,Promise.resolve().then(o.bind(o,61712));case 2:return K=q.sent,X=K.QueryProfile,q.next=6,Promise.resolve().then(o.bind(o,55753));case 6:return V=q.sent,I=V.DEMO,q.abrupt("return",{default:function(){return z.createElement(X,{isDemo:!0,outValue:JSON.parse(I),profileRef:"body"})}});case 9:case"end":return q.stop()}},nn)})))),asset:{type:"BLOCK",id:"queryprofile-demo-0",refAtomIds:["QueryProfile"],dependencies:{"index.jsx":{type:"FILE",value:`import { QueryProfile } from 'databend-profile-ui';
import { DEMO } from './demo';

export default () => (
  <QueryProfile isDemo={true} outValue={JSON.parse(DEMO)} profileRef={'body'} />
);`},"databend-profile-ui":{type:"NPM",value:"0.0.41"},"./demo.ts":{type:"FILE",value:o(45760).Z}},entry:"index.jsx"},context:{"./demo.ts":zn,"databend-profile-ui":T,"/home/runner/work/databend-profile-ui/databend-profile-ui/src/QueryProfile/demo.ts":zn},renderOpts:{compile:function(){var nn=k()(i()().mark(function X(){var V,I=arguments;return i()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,o.e(335).then(o.bind(o,37335));case 2:return q.abrupt("return",(V=q.sent).default.apply(V,I));case 3:case"end":return q.stop()}},X)}));function K(){return nn.apply(this,arguments)}return K}()}},"queryprofile-demo-1":{component:z.memo(z.lazy(k()(i()().mark(function nn(){var K,X;return i()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(o.bind(o,61712));case 2:return K=I.sent,X=K.TestProfile,I.abrupt("return",{default:function(){return z.createElement(X,{isDemo:!0})}});case 5:case"end":return I.stop()}},nn)})))),asset:{type:"BLOCK",id:"queryprofile-demo-1",refAtomIds:["QueryProfile"],dependencies:{"index.jsx":{type:"FILE",value:`import { TestProfile } from 'databend-profile-ui';

export default () => <TestProfile isDemo />;`},"databend-profile-ui":{type:"NPM",value:"0.0.41"}},entry:"index.jsx"},context:{"databend-profile-ui":T},renderOpts:{compile:function(){var nn=k()(i()().mark(function X(){var V,I=arguments;return i()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,o.e(335).then(o.bind(o,37335));case 2:return q.abrupt("return",(V=q.sent).default.apply(V,I));case 3:case"end":return q.stop()}},X)}));function K(){return nn.apply(this,arguments)}return K}()}}}},55753:function(Mn,$,o){o.r($),o.d($,{DEMO:function(){return bn}});var bn=`{
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
    }`},61712:function(Mn,$,o){o.r($),o.d($,{DatabendJson:function(){return ye},QueryProfile:function(){return Ue},TestProfile:function(){return rs}});var bn=o(97857),i=o.n(bn),Gn=o(5574),k=o.n(Gn),z=o(92652),W=o(90512),T=o(67294),zn=o(92077),$n=o.n(zn),nn=o(79830),K=o(47539),X=o(29879),V=o.n(X);function I(c){var n;return c<=999?c:(n=$n()(c).format("0.0a"))===null||n===void 0?void 0:n.toUpperCase()}function wn(c){var n=document.createElement("div");n.style.position="absolute",n.style.whiteSpace="nowrap",n.style.fontSize="12px",n.style.visibility="hidden",n.textContent=c,document.body.appendChild(n);var t=n.offsetWidth;return document.body.removeChild(n),t}var q=function(n){return(0,nn.format)(n,{thousandsSeparator:","})},Tn=function(n){return n!==void 0?(0,K.Z)(Number(n)||0):"0ms"},Jn=function(n){return V()(n||0)},Rs=function(n){if(n<=60)return n.toFixed(0)+"s";var t=Math.floor(n/60),s=n-t*60;return t+"m"+(s>=1?s.toFixed(0)+"s":"")};function Rn(c,n){return n<=0?"0%":(c/n*100).toFixed(1)+"%"}function Be(c){try{return JSON.parse(c),!0}catch(n){return!1}}var oe=o(84573),Kn=o(57607),Q=o(11889),Y=o(26713),e=o(85893),Ze=function(n){var t=n.position,s=n.title;return(0,e.jsx)("div",{style:{left:t.x+"px",top:t.y+"px"},className:(0,W.Z)("databend-self-tooltip"),children:s})},Fe=Ze,Ge=o(13769),Un=o.n(Ge),$e=o(50888),Je=o(11382),Ke=["className","children"],Xe=(0,e.jsx)($e.Z,{style:{fontSize:24},spin:!0}),Ve=function(n){var t=n.className,s=n.children,a=Un()(n,Ke);return(0,e.jsx)(Je.Z,i()(i()({style:{zIndex:2e3},className:t},a),{},{indicator:Xe,children:s}))},le=Ve,Qe=function(n){var t=n.onButtonClick,s=n.title,a=n.subTitle,u=n.buttonText,h=n.buttonArea,d=n.loading,y=d===void 0?!1:d,p=n.width,C=p===void 0?"360px":p,w=n.paddingTop,g=w===void 0?"66px":w,R=n.TopIcon,L=a||"There is no related resource, you can try to refresh or create a new resource";return(0,e.jsx)(le,{spinning:y,children:(0,e.jsx)("div",{className:"profile-no-result-with-action",style:{paddingTop:g},children:(0,e.jsx)("div",{style:{width:C},className:"profile-no-result-with-action-wrap",children:(0,e.jsxs)(Y.Z,{direction:"vertical",className:"profile-no-result-with-action-content",size:12,children:[R&&(0,e.jsx)(Q.Z,{className:"pointer-events-none",icon:R}),(0,e.jsx)("div",{className:"profile-no-result-with-action-title",children:s}),a!==null&&(0,e.jsx)("div",{className:"profile-no-result-with-action-sub-title",children:L}),h?(0,e.jsx)(e.Fragment,{children:h}):(0,e.jsx)(e.Fragment,{children:u&&(0,e.jsx)(Q.Z,{onClick:function(D){return t&&t(D)},type:"primary",children:u})})]})})})})},Ye=(0,T.memo)(Qe),nt=function(n){var t=n.data,s=(0,T.useState)(""),a=k()(s,2),u=a[0],h=a[1];return(0,T.useEffect)(function(){if(t!=null&&t.length){var d="linear-gradient(90deg",y=0;t.forEach(function(p){d+=", ".concat(p.color," ").concat(y,"%"),y+=p.percent,d+=", ".concat(p.color," ").concat(y,"%")}),d+=")",h(d)}},[t]),(0,e.jsx)(e.Fragment,{children:u&&(0,e.jsx)("div",{style:{height:"8px",borderRadius:"4px",backgroundImage:u}})})},et=(0,T.memo)(nt),tt=o(44107),st={errorTip:"kCjZdetPcq0VpgDgIYRf"},at=o(42481),ot=o(56986),lt=o(20640),ce=o.n(lt),ct=function(n){var t=n.containerRef,s=n.className,a=n.copyText,u="Copy",h="Copied",d=(0,T.useState)(u),y=k()(d,2),p=y[0],C=y[1],w=function(){if(C(h),a)ce()(a);else if(t){var R;ce()(t==null||(R=t.current)===null||R===void 0?void 0:R.innerText)}};return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(Q.Z,{onMouseLeave:function(){return C(u)},onClick:function(){return w()},className:(0,W.Z)(s),type:"primary",children:p})})},ut=(0,T.memo)(ct),ue=function(n){var t=n.content,s=n.buttonText,a=n.isString,u=n.height,h=n.copyText,d=n.CustomArea,y=n.isBreakLine,p=(0,T.useRef)(null),C=a?t:JSON.stringify(JSON.parse(t),null,2);return(0,e.jsxs)("div",{style:{height:u+"px"},className:"db-code-content-container",children:[s&&(0,e.jsx)(Q.Z,{className:"db-code-content-button-text",style:{top:0,left:"20px",borderTopLeftRadius:0,borderTopRightRadius:0},type:"primary",children:s}),(0,e.jsx)("div",{className:"db-code-content-copy",children:(0,e.jsxs)(Y.Z,{children:[d&&d,(0,e.jsx)(ut,{className:"db-code-content--button",copyText:h||t,containerRef:p})]})}),(0,e.jsx)("div",{className:(0,W.Z)("db-code-content-block",y&&"db-code-content-break-line"),style:{fontWeight:500,whiteSpace:"pre-wrap"},ref:p,children:(0,e.jsx)(at.Z,{style:ot.Z,children:C})})]})};ue.defaultProps={buttonText:"Meta data",isString:!0,height:"auto",isBreakLine:!1};var rt=ue,_t=["content","children","buttonText"],re=function(n){var t=n.content,s=n.children,a=n.buttonText,u=Un()(n,_t);return(0,e.jsx)(Kn.Z,i()(i()({overlayClassName:st.errorTip,overlayInnerStyle:{padding:0},title:(0,e.jsx)(rt,{buttonText:a,content:t||""})},u),{},{children:s}))};re.defaultProps={buttonText:"Failed Text"};var _e=re,dt=function(n){var t=n.icon,s=t===void 0?"databend-icon-xihuan_like":t,a=n.className,u=n.onClick,h=n.style,d=n.size,y=d===void 0?18:d;return(0,e.jsx)("span",{className:"g-box-c",children:(0,e.jsx)("i",{onClick:function(C){return u&&u(C)},className:(0,W.Z)("databend-icon-v2",s,a),style:i()(i()({},h),{},{fontSize:y+"px"})})})},en=dt,it=o(81763),de=o(18587);function ie(){var c=null;(0,it.Z)(function(){c&&c()});function n(s){var a,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"body";c=(0,de.ak)((a=document)===null||a===void 0?void 0:a.querySelector(u),function(){s.resize({animation:{duration:300,easing:"cubicInOut"}})})}function t(s){var a,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"body";c=(0,de.ak)((a=document)===null||a===void 0?void 0:a.querySelector(u),function(){s()})}return{reshape:n,reshapeDOM:t}}var ht=function(n){var t=n.text,s=t===void 0?"0":t,a=n.roundColor,u=a===void 0?"#1C82F2":a,h=n.width,d=h===void 0?12:h,y=n.className,p=n.textClass,C=n.gap,w=C===void 0?8:C,g=n.wrapClass,R=g===void 0?"db-simple-legend-default":g,L=n.isInnerHtml,J=L===void 0?!1:L;return(0,e.jsxs)("span",{className:R,style:{gap:w+"px"},children:[(0,e.jsx)("span",{style:{backgroundColor:u,width:d+"px",height:d+"px",borderRadius:"50%",minWidth:"1px"},className:(0,W.Z)("db-simple-inline-block",y)}),s!==void 0&&s!==""&&(0,e.jsx)(e.Fragment,{children:J?(0,e.jsx)("span",{style:{flex:1},className:(0,W.Z)("db-simple-legend-text",p),dangerouslySetInnerHTML:{__html:s}}):(0,e.jsx)("span",{style:{flex:1},className:(0,W.Z)("db-simple-legend-text",p),children:s})})]})},he=ht,mt=o(19632),Sn=o.n(mt),pt=o(9824),ft=o(35322),me="OutputRows";function pe(c,n,t,s,a){return[["M",c+a,n],["l",t-a*2,0],["a",a,a,0,0,1,a,a],["l",0,s-a*2],["a",a,a,0,0,1,-a,a],["l",-t+a*2,0],["a",a,a,0,0,1,-a,-a],["l",0,-s+a*2],["a",a,a,0,0,1,a,-a],["Z"]]}var vt=[["M",19.0374+2,60],["H",15],["C",10.7909+2,60,11,5.79086+56,11,64],["C",11,10.2091+56,10.7909+2,68,15,68],["H",19.1059+2],["C",17.8458+2,13.9437+56,15.7082+2,15.2309+56,13.2964+2,15.0062+56],["C",2.5+2,70,1,13.5+56,4,7.5+56],["C",-2.5+2,1.00616+56,9.5+2,.5+56,13.2964+2,1.00616+56],["C",15.6724+2,1.00616+56,17.772+2,2.18999+56,19.0374+2,60],["Z"]],bt=[["M",125.5,-18],["L",131.9952,-6.75],["L",119.00481,-6.75],["L",125.5,-18],["Z"],["M",125.5,-1],["L",125.5,-7]];function yt(c){if((c==null?void 0:c.length)<=2)return c;var n=1,t=4.5,s=c.map(function(d){return d._value}).filter(function(d){return d!==void 0}),a=Math.min.apply(Math,Sn()(s)),u=Math.max.apply(Math,Sn()(s)),h=function(y,p,C,w,g){var R=(y-p)/(C-p);return w+(g-w)*R};return c.forEach(function(d){d._value!==void 0?d.lineWidth=h(d._value,a,u,n,t):d.lineWidth=n}),c}function gt(c){var n=-1;c.sort(function(s,a){return Number(a==null?void 0:a.id)-Number(s==null?void 0:s.id)});var t=c==null?void 0:c.map(function(s){var a=s.title,u=s.name,h=s.id,d=s.statisticsDescArray;n===-1&&(n=(d==null?void 0:d.findIndex(function(p){return p._type===me}))||0);var y=d[n]._value;return i()(i()({},s),{},{id:h,outputRows:y,value:{title:((u==null?void 0:u.length)>=26?(u==null?void 0:u.slice(0,26))+"...":u||"  ")+" [".concat(h,"]"),items:[{text:a||"  "}]}})});return t}function xt(c){var n=-1;return c==null?void 0:c.map(function(t){var s=t==null?void 0:t.statisticsDescArray;n===-1&&(n=(s==null?void 0:s.findIndex(function(h){return h._type===me}))||0);var a=s[n]._value,u={source:t==null?void 0:t.parent_id,target:t==null?void 0:t.id};return a<=0?u:i()(i()({},u),{},{value:I(a),_value:a})})}var Ct=function(n){var t=n.plainData,s=n.graphSize,a=n.graphSizeHeight,u=n.graphRef,h=n.isLight,d=n.overviewInfoCurrent,y=n.onReady,p=n.queryId,C=p===void 0?"analysis":p,w=function(){var U=u==null?void 0:u.current;U&&(U.fitView(),U.refresh())},g=yt(xt(t)),R={nodes:gt(t),edges:g},L={width:s,height:a},J=i()(i()({},L),{},{autoFit:!1,onReady:y,data:R,layout:{rankdir:"TB",ranksepFunc:function(){return 20}},tooltipCfg:{show:!1},toolbarCfg:{show:!0,customContent:function(U){var r=U.zoomIn,O=U.zoomOut;return(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"g-cursor g-box-c",onClick:function(){return w()},children:(0,e.jsx)(en,{size:16,icon:"databend-icon-quanping1"})}),(0,e.jsx)("span",{className:"g-cursor g-box-c",onClick:O,children:(0,e.jsx)(en,{size:16,icon:"databend-icon-minus-bold"})}),(0,e.jsx)("span",{className:"g-cursor g-box-c",onClick:r,children:(0,e.jsx)(en,{size:16,icon:"databend-icon-jia"})}),(0,e.jsx)("span",{className:"g-cursor g-box-c",onClick:function(){var H;return u==null||(H=u.current)===null||H===void 0?void 0:H.downloadFullImage("databend-profile-".concat(C),"image/png")},children:(0,e.jsx)(en,{size:16,icon:"databend-icon-xiazai_download-four"})})]})}},nodeCfg:{padding:10,size:[250,40],title:{autoEllipsis:!0,containerStyle:{fill:"transparent"},style:function(U){var r;return{fontWeight:600,fill:U!=null&&(r=U.errors)!==null&&r!==void 0&&r.length?"#fff":h?"#000":"#fff"}}},anchorPoints:[[.5,0],[.5,1]],style:function(U){var r;return{radius:5,fill:U!=null&&(r=U.errors)!==null&&r!==void 0&&r.length?"#f73920":h?"#fff":"#101",stroke:h?"#ccc":"#fff",filter:h?"drop-shadow(2px 2px 2px rgba(204, 204, 204, .3))":"drop-shadow(2px 3px 2px rgba(255, 255, 255, .2))"}},nodeStateStyles:{highlight:{stroke:"#2c91ff",lineWidth:2},hover:{stroke:"#2c91ff",lineWidth:2}},customContent:function(U,r,O){var B,H,A,tn,E,sn,dn=O.startX,hn=O.startY,yn=O.width,Z=U.text;Z=(B=Z)===null||B===void 0?void 0:B.replace(/\n/g," ");var kn=230,qn=(H=Z)===null||H===void 0?void 0:H.length,F=r==null||(A=r.cfg)===null||A===void 0||(A=A.item)===null||A===void 0||(A=A._cfg)===null||A===void 0?void 0:A.model,jn=(F==null?void 0:F.totalTime)/(((tn=d.current)===null||tn===void 0?void 0:tn.totalTime)||1),gn=F==null||(E=F.errors)===null||E===void 0?void 0:E.length,Vn=F==null?void 0:F.parent_id,mn=r.addShape("text",{attrs:{textBaseline:"top",x:dn,y:hn,text:Z,fill:gn?"rgba(255,255,255,0.8)":"#75767a",textAlign:"left"},name:"text-".concat(Math.random())}),Nn=mn.getBBox().width;if(qn>26&&Nn>yn){var Hn,In=((Hn=Z)===null||Hn===void 0?void 0:Hn.slice(0,Math.floor(yn/Nn*qn-3)))+"...";mn.attr("text",In)}var pn=(sn=mn==null?void 0:mn.getBBox().height)!==null&&sn!==void 0?sn:0,fn=8,On=4,vn=jn*kn,Qn=pe(dn,hn+pn+10,kn,fn,On);r.addShape("path",{attrs:{path:Qn,fill:"#f2f2f2"},name:"progress-bg-".concat(Math.random())});var Yn=pe(dn,hn+pn+10,vn,fn,On);if(r.addShape("path",{attrs:{path:Yn,fill:vn<=0?"rgba(0,0,0,0)":"rgb(1, 117, 246)"},name:"progress-fg-".concat(Math.random())}),vn>0&&vn<9&&r.addShape("path",{attrs:{path:vt,fill:gn?"#f73920":h?"#fff":"#101"},name:"circle-path-bg-".concat(Math.random())}),Vn==="null"){var An=g==null?void 0:g.find(function(En){return(En==null?void 0:En.source)==="null"});r.addShape("path",{attrs:{path:bt,fill:"#ccc",stroke:"#ccc",lineWidth:(An==null?void 0:An.lineWidth)||1},name:"percentage-output-text-".concat(Math.random())});var Wn=I(F==null?void 0:F.outputRows);r.addShape("text",{attrs:{textBaseline:"top",x:125+wn(Wn)/2,y:-30,text:Wn,fill:h?"rgba(12, 22, 43, 0.6)":"#fff",fontWeight:"bold",fontSize:12,textAlign:"right"},name:"percentage-output-text"})}var an=jn>0?"".concat((jn*100).toFixed(1),"%"):"0%";return r.addShape("text",{attrs:{textBaseline:"top",x:dn+yn,y:hn-27,text:an,fill:gn?"#fff":h?"#000":"#fff",fontSize:11,textAlign:"right"},name:"percentage-text-".concat(Math.random())}),Math.max(pn,fn)}},edgeCfg:{type:"cubic-vertical",endArrow:!1,style:function(U){var r=(U==null?void 0:U.lineWidth)||1;return{lineWidth:r}},label:{style:{fontWeight:600,fill:h?"rgba(12, 22, 43, 0.6)":"#fff"}},startArrow:{type:"triangle"}},graphCfg:{containerStyle:{backgroundColor:"#f0f0f0"}},markerCfg:function(U){var r;return{animate:!0,position:"bottom",show:(r=R.edges.filter(function(O){return O.source===U.id}))===null||r===void 0?void 0:r.length}},behaviors:["drag-canvas","zoom-canvas"]});return(0,e.jsx)(pt.Z,i()({},J))},wt=(0,T.memo)(Ct,function(c,n){var t=(0,ft.Z)(c.plainData,n.plainData),s=c.graphSize===n.graphSize,a=c.graphSizeHeight===n.graphSizeHeight,u=c.isLight===n.isLight;return t&&s&&a&&u}),Tt=o(9783),fe=o.n(Tt),ve=o(54907),Rt=o(94274),Ut=o(25968),St=o(6226),kt=o(63677),qt=["children"],jt=function(n){var t=n.children,s=Un()(n,qt);return(0,e.jsx)(Q.Z,i()(i()({},s),{},{className:(0,W.Z)(s.className,"db-reset-white-button"),style:i()({gap:"6px"},s==null?void 0:s.style),children:t}))},Nt=jt,Ht=["padding","borderRadius","children","className","isNeedBorder","isJader","onClick","height"],be=function(n){var t=n.padding,s=n.borderRadius,a=n.children,u=n.className,h=n.isNeedBorder,d=n.isJader,y=n.onClick,p=n.height,C=Un()(n,Ht),w=t===void 0?[20,20,20,20]:t,g=Array.isArray(w);return(0,e.jsx)("div",i()(i()({onClick:y,className:(0,W.Z)("db-card-wrap-out",u,h&&"db-card-wrap-border",d&&"db-card-wrap-jader"),style:i()(i()({},g?{paddingTop:w[0]+"px",paddingRight:w[1]+"px",paddingBottom:w[2]+"px",paddingLeft:w[3]+"px"}:{padding:t+"px"}),{},{height:p==="auto"?"auto":p+"px",borderRadius:"".concat(s,"px")})},C),{},{children:a}))};be.defaultProps={padding:[20,20,20,20],borderRadius:6,isNeedBorder:!0,height:"auto",isJader:!1};var At=be,Et=o(49677),Pt=o.n(Et),Lt=o(55171),Dt=o.n(Lt),Mt=function(n){var t=Object.assign({},(Pt()(n),n));return(0,e.jsx)(Dt(),i()(i()({style:{padding:"10px",borderRadius:"4px"},displayDataTypes:!1,theme:"ashes"},t),{},{src:(t==null?void 0:t.src)||{}}))},ye=Mt,zt=o(78234),ge=o(64665),xe=o(97369),It=o(49956),Ot=o(47008),Wt=o(78537),Ce=o(27067),Bt=o(31825),we=o(35183),Zt=o(11415),Te=o(79016),Re=o(6228);we.D([It.N,Ot.N,Wt.N,Ce.N,Bt.N,ge.N,xe.N,Re.N,Te.z]),we.D([Ce.N,ge.N,xe.N,Re.N,Te.z]);var Ft=function(n){var t=n.series,s=n.legendData,a=n.xData,u=n.isLight,h=(0,T.useRef)(null),d=ie(),y=d.reshape,p=u?"rgba(1, 14, 41, 0.08)":"rgba(255, 255, 255, 0.08)",C=u?"rgba(12, 22, 43, 0.6)":"rgba(249, 249, 249, 0.6)";return(0,zt.Z)(function(){var w=Zt.S1(h.current),g={tooltip:{trigger:"axis"},legend:{type:"scroll",data:s},grid:{left:"13%",right:"9%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:a,axisLine:{lineStyle:{color:p}},axisLabel:{showMinLabel:!0,showMaxLabel:!0,color:C,margin:8},axisTick:{show:!1}},yAxis:{offset:30,type:"value"},series:t};w.setOption(g),y(w,"body")}),(0,e.jsx)("div",{style:{height:"280px",width:"100%"},ref:h})},Gt=(0,T.memo)(Ft),$t=["isLight","metricsData"],Jt=ve.Z.Panel;function Xn(c){var n,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return c?(n=Object.values(c))===null||n===void 0?void 0:n.sort(function(s,a){return s==null?void 0:s.localeCompare(a)}).join(" "):t||"No labels"}function Kt(c){return c.map(function(n){var t=Object.keys(n.value)[0],s=t==="Histogram",a=t==="Summary",u=s||a;if(!n.labels&&!u)return{name:n.name,columns:[{title:t,key:t,dataIndex:t}],data:[fe()({},t,n.value[t])],labels:n.labels?n.labels:null,value:n.value};if(u){var h=s?n.value.Histogram:n.value.Summary,d=[],y=[];return d=h.map(function(g){return s?g.less_than:g.quantile}),y=h.map(function(g){return g.count}),{isChart:!0,name:n.name,_tag:Xn(n.labels,n.name),columns:d,data:[y],labels:n.labels,value:n.value,type:t}}var p=Object.keys(n.labels),C=p.map(function(g){return{title:g,key:g,dataIndex:g}}).concat({title:t,key:t,dataIndex:t}),w=[i()(i()({},n.labels),{},fe()({},t,n.value[t]))];return{name:n.name,columns:C,data:w,labels:n.labels,value:n.value}})}function Xt(c){var n={};return c.forEach(function(t){if(!n[t.name])n[t.name]=i()(i()({},t),{},{labelsArr:[i()(i()({},t.labels),{},{_tag:Xn(t.labels,t.name)})]}),delete n[t.name].labels;else if(t!=null&&t.type)n[t.name].data=[].concat(Sn()(n[t.name].data),Sn()(t.data)),n[t.name].labelsArr.push(i()(i()({},t.labels),{},{_tag:Xn(t.labels,t.name)}));else{var s;(s=n[t.name].data).push.apply(s,Sn()(t.data))}}),Object.values(n)}function Vt(c){return c==null?void 0:c.map(function(n){return{machine:n[0],data:Xt(Kt(n[1]).sort(function(t,s){if((t==null?void 0:t.name)===(s==null?void 0:s.name)){var a;return s==null||(a=s._tag)===null||a===void 0?void 0:a.localeCompare(t==null?void 0:t._tag)}return 0}).sort(function(t,s){return!(t!=null&&t.type)&&!(s!=null&&s.type)?0:t!=null&&t.type?s!=null&&s.type?t.type.localeCompare(s==null?void 0:s.type):1:-1}))}})}var Qt=function(n){var t=n.isLight,s=n.metricsData,a=Un()(n,$t),u=(0,T.useState)(!1),h=k()(u,2),d=h[0],y=h[1],p=(0,T.useState)([]),C=k()(p,2),w=C[0],g=C[1];return(0,T.useEffect)(function(){if(s){var R=Object.entries(s),L=Vt(R);g(L)}},[s]),(0,e.jsx)(Rt.Z,i()(i()({destroyOnClose:!0,width:"100vw"},a),{},{title:(0,e.jsxs)(Y.Z,{children:[(0,e.jsx)("span",{children:a==null?void 0:a.title}),(0,e.jsx)(Nt,{onClick:function(){return y(!d)},children:(0,e.jsxs)(Y.Z,{size:4,children:[(0,e.jsx)(en,{size:14,icon:"databend-icon-qiehuan_switch"}),d?"Chart View":"Metrics JSON"]})})]}),children:(0,e.jsx)(e.Fragment,{children:d?(0,e.jsx)(ye,{src:s}):(0,e.jsx)(ve.Z,{className:"profile-metrics-collapseWrap",expandIconPosition:"start",defaultActiveKey:Array.from({length:(w==null?void 0:w.length)+1},function(R,L){return L}),children:w==null?void 0:w.map(function(R,L){var J,D=R==null||(J=R.data)===null||J===void 0?void 0:J.length,U=D%2!==0;return(0,e.jsx)(Jt,{header:(0,e.jsxs)("div",{className:"profile-metrics-header",children:["Machine ",L+1,":",R==null?void 0:R.machine]}),children:(0,e.jsx)(Ut.Z,{gutter:[16,16],className:"profile-metrics-row",children:R==null?void 0:R.data.map(function(r,O){var B,H;return(0,T.createElement)(St.Z,{xl:12,xxl:12,lg:24,md:24,sm:24,xs:24,className:"profile-metrics-col",span:U&&D-1===O?24:12,key:O},(0,e.jsx)("div",{className:"profile-metrics-name",children:r==null?void 0:r.name}),r!=null&&r.data?(0,e.jsx)(e.Fragment,{children:r!=null&&r.type?(0,e.jsx)(Gt,{isLight:t,series:r==null||(B=r.data)===null||B===void 0?void 0:B.map(function(A,tn){var E;return{type:"bar",data:A,name:r==null||(E=r.labelsArr[tn])===null||E===void 0?void 0:E._tag}}),legendData:r==null||(H=r.labelsArr)===null||H===void 0?void 0:H.map(function(A){return A==null?void 0:A._tag}),xData:r==null?void 0:r.columns}):(0,e.jsx)(kt.Z,{className:"profile-metrics-table",pagination:!1,dataSource:r==null?void 0:r.data,columns:r==null?void 0:r.columns},"key")}):(0,e.jsx)(At,{children:JSON.stringify(r==null?void 0:r.value)}))})})},L)})})})}))},Yt=Qt,ns="CpuTime",es="WaitTime";function ts(c){return c==null?void 0:c.map(function(n){var t,s,a,u=Object.keys(n)[0];return{_errorType:u,message:((t=n[u])===null||t===void 0?void 0:t.message)||"",detail:((s=n[u])===null||s===void 0?void 0:s.detail)||"",backtrace:((a=n[u])===null||a===void 0||(a=a.backtrace)===null||a===void 0||(a=a.build_id)===null||a===void 0?void 0:a.join(","))||""}})}function ss(c,n){return c==="Bytes"?q(n):c==="Rows"||c==="Count"?Jn(n):c==="MillisSeconds"?Tn(n):c==="NanoSeconds"?Tn(n/1e6):n}var as=function(n){var t,s,a,u,h=n.profileRef,d=n.queryDuration,y=n.queryId,p=y===void 0?"analysis":y,C=n.outValue,w=n.countShow,g=n.offsetWidth,R=g===void 0?400:g,L=n.offsetHeight,J=L===void 0?150:L,D=n.showTextArea,U=D===void 0?!0:D,r=n.initLoading,O=r===void 0?!1:r,B=n.isNeedMetrics,H=B===void 0?!1:B,A=n.isDemo,tn=A===void 0?!1:A,E=n.isLight,sn=E===void 0?!0:E,dn=n.getActiveName,hn=dn===void 0?null:dn,yn=n.getOverviewInfo,Z=yn===void 0?null:yn,kn=n.ErrorTicketDom,qn=kn===void 0?(0,e.jsx)(e.Fragment,{}):kn,F=n.isAdmin,jn=F===void 0?!1:F,gn=n.responseDom,Vn=gn===void 0?"body":gn,mn=(0,z.Z)(0),Nn=k()(mn,2),Hn=Nn[0],In=Nn[1],pn=(0,T.useRef)(null),fn=(0,T.useRef)(null),On=(0,z.Z)(window.innerHeight-150),vn=k()(On,2),Qn=vn[0],Yn=vn[1],An=ie(),Wn=An.reshapeDOM,an=(0,T.useRef)(void 0),En=(0,z.Z)([]),Se=k()(En,2),G=Se[0],_s=Se[1],un=(0,T.useRef)(void 0),ds=(0,z.Z)(!0),ke=k()(ds,2),qe=ke[0],ne=ke[1],is=(0,z.Z)(""),je=k()(is,2),Bn=je[0],Ne=je[1],hs=(0,z.Z)([]),He=k()(hs,2),on=He[0],ms=He[1],ps=(0,z.Z)([]),Ae=k()(ps,2),xn=Ae[0],fs=Ae[1],vs=(0,z.Z)(!1),Ee=k()(vs,2),bs=Ee[0],Pe=Ee[1],ys=(0,z.Z)({clientX:0,clientY:0,show:!1,text:""}),Le=k()(ys,2),rn=Le[0],ee=Le[1],gs=(0,z.Z)({cpuTime:0,waitTime:0,isTotalBigerZero:!1,totalTime:0,totalTimePercent:"0%",labels:void 0,statisticsDescArray:[],metrics:null}),De=k()(gs,2),_=De[0],te=De[1];function xs(l){var b,x,f,v=l==null?void 0:l.profiles,j=l==null?void 0:l.statistics_desc,S=(b=j[ns])===null||b===void 0?void 0:b.index,N=(x=j[es])===null||x===void 0?void 0:x.index,M=0,ln=0,Pn=[];v==null||v.forEach(function(m){m.id=String(m.id),m.parent_id=String(m.parent_id);var cn=m==null?void 0:m.errors,se=m==null?void 0:m.statistics[S],ae=m==null?void 0:m.statistics[N];m.totalTime=se+ae,m.cpuTime=se,m.waitTime=ae,M+=se,ln+=ae,m.errors=(cn==null?void 0:cn.length)>0?ts(m==null?void 0:m.errors):[],m.statisticsDescArray=Object.entries(j).map(function(ws){var We=k()(ws,2),Ts=We[0],P=We[1];return{_type:Ts,desc:P==null?void 0:P.desc,display_name:(P==null?void 0:P.display_name)||(P==null?void 0:P.displayName),index:P==null?void 0:P.index,unit:P.unit,plain_statistics:P==null?void 0:P.plain_statistics,_value:m.statistics[P==null?void 0:P.index]}})});var _n=M+ln;v==null||v.forEach(function(m){m.totalTimePercent=Rn(m==null?void 0:m.totalTime,_n),m.cpuTimePercent=Rn(m==null?void 0:m.cpuTime,m.totalTime),m.waitTimePercent=Rn(m==null?void 0:m.waitTime,m.totalTime)}),_s(v),ms((f=(0,tt.Z)(v))===null||f===void 0||(f=f.filter(function(m){return parseFloat(m.totalTimePercent)>.09}))===null||f===void 0?void 0:f.sort(function(m,cn){return cn.totalTime-m.totalTime}));var Ln=Rn(M,_n),Cn=Rn(ln,_n),Dn={cpuTime:M,waitTime:ln,totalTime:_n,totalTimePercent:"100%",cpuTimePercent:Ln,waitTimePercent:Cn,statisticsDescArray:Pn,isNode:!1,errors:[]};un.current=Dn,te(Dn),Z==null||Z(Dn)}function Cs(){var l=an==null?void 0:an.current;l&&(l==null||l.fitView())}var Zn=function(){h&&In(tn?700:(h==null?void 0:h.offsetWidth)-R),Yn(window.innerHeight-J)};(0,T.useEffect)(function(){hn&&hn(Bn)},[Bn]),(0,T.useEffect)(function(){if(C)try{xs(C)}catch(l){oe.ZP.destroy(),oe.ZP.warning("Incorrect data")}},[w,C]),(0,T.useEffect)(function(){O&&an.current&&Cs()},[O]),(0,T.useEffect)(function(){G!=null&&G.length&&Zn()},[G,U]),(0,T.useEffect)(function(){var l=[];if(jn){var b;l=_==null||(b=_.statisticsDescArray)===null||b===void 0?void 0:b.filter(function(f){return f._value>0})}else{var x;l=_==null||(x=_.statisticsDescArray)===null||x===void 0?void 0:x.filter(function(f){return f._value>0&&(f==null?void 0:f.plain_statistics)})}fs(l)},[_==null?void 0:_.statisticsDescArray]),(0,T.useEffect)(function(){Zn(),Wn(function(){Zn()},Vn)},[]);function Me(l){var b=l.totalTime,x=l.totalTimePercent,f=l.cpuTime,v=l.waitTime,j=l.cpuTimePercent,S=l.waitTimePercent,N=l.id,M=l.isNode,ln=l.labels,Pn=l.statisticsDescArray,_n=l.name,Ln=l.errors;Ne(N);var Cn={cpuTime:f,waitTime:v,totalTime:b,totalTimePercent:x,cpuTimePercent:j,waitTimePercent:S,labels:ln,statisticsDescArray:Pn,isNode:M,name:_n,id:N,metrics:l==null?void 0:l.metrics,errors:Ln};te(Cn),Z==null||Z(Cn)}function ze(l){return l.getNodes()}function Ie(l,b){l.setItemState(b,"highlight",!0)}function Oe(l){ze(l).forEach(function(b){l.clearItemStates(b)})}function Fn(){ee({clientX:0,clientY:0,show:!1,text:""})}return(0,e.jsxs)(e.Fragment,{children:[(rn==null?void 0:rn.show)&&(0,e.jsx)(Fe,{position:{x:rn==null?void 0:rn.clientX,y:rn.clientY},title:rn.text}),(0,e.jsxs)("div",{ref:fn,className:"profile-index-container",children:[(G==null?void 0:G.length)>0&&(0,e.jsxs)("div",{className:"profile-index-details-info",children:[(on==null?void 0:on.length)>0&&(0,e.jsxs)("div",{className:"profile-index-top-ranking",children:[(0,e.jsxs)("div",{className:"profile-indx-most-expensive-nodes",children:[" ","Most Expensive Nodes",(0,e.jsxs)("span",{className:"profile-index-ranking-length",children:[" ","(",on==null?void 0:on.length," of ",G==null?void 0:G.length,")"]})]}),(0,e.jsx)("div",{style:{marginTop:"8px"},children:on==null?void 0:on.map(function(l,b){return(0,e.jsxs)("div",{onClick:function(){var f,v,j=l==null?void 0:l.id;if(Bn!==j){Me(i()(i()({},l),{},{isNode:!0})),ne(!1);var S=an.current,N=S==null?void 0:S.cfg.nodes,M=N==null?void 0:N.find(function(cn){return(cn==null?void 0:cn._cfg.id)===j}),ln=S==null?void 0:S.getZoom(),Pn=M==null||(f=M._cfg)===null||f===void 0||(f=f.bboxCache)===null||f===void 0?void 0:f.x,_n=M==null||(v=M._cfg)===null||v===void 0||(v=v.bboxCache)===null||v===void 0?void 0:v.y,Ln=S==null?void 0:S.getWidth(),Cn=S==null?void 0:S.getHeight(),Dn=Ln/2-Pn*ln,m=Cn/2-_n*ln+20;Oe(S),Ie(S,M),(N==null?void 0:N.length)>1&&S.moveTo(Dn,m)}},className:(0,W.Z)("profile-index-top-item-style",Bn===l.id&&"profile-index-top-active-item-style"),children:[(0,e.jsxs)("span",{children:[l.name," [",l.id,"]"]}),(0,e.jsx)("span",{className:"profile-index-top-item-time",children:l.totalTimePercent})]},b)})})]}),(0,e.jsxs)("div",{className:(0,W.Z)("profile-index-top-ranking","profile-common-styles-pm"),children:[(0,e.jsxs)("div",{className:"profile-common-styles-few g-box-center-between",children:[(0,e.jsxs)("div",{children:["Profile Overview",(0,e.jsxs)("span",{className:"profile-index-color-text-2",children:[" ",qe&&"(Finished)"]})]}),!qe&&H&&(0,e.jsx)(Kn.Z,{title:_!=null&&_.metrics?void 0:"No Metrics",children:(0,e.jsx)(Q.Z,{disabled:!(_!=null&&_.metrics),onClick:function(){return Pe(!0)},type:"primary",size:"small",children:(0,e.jsxs)(Y.Z,{size:4,children:[_!=null&&_.metrics?(0,e.jsx)(en,{icon:"databend-icon-yulan-dakai_preview-open"}):(0,e.jsx)(en,{icon:"databend-icon-yulan-guanbi_preview-close-one"}),"Metrics"]})})})]}),(0,e.jsxs)("div",{className:"g-mt-8",children:[_.isNode?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"g-t-right",children:_==null?void 0:_.totalTimePercent}),(0,e.jsx)(et,{data:[{color:"rgb(28, 130, 242)",percent:parseFloat(_.cpuTimePercent)},{color:"rgb(255, 152, 0)",percent:parseFloat(_.waitTimePercent)}]})]}):(0,e.jsxs)("div",{className:"profile-common-styles-bcpc",children:[(0,e.jsx)("span",{children:"Total Execution Time"}),(0,e.jsxs)("span",{className:"profile-index-color-text-1",children:[(0,e.jsxs)("span",{className:"profile-index-color-text-2",children:["(",Tn(C?(_==null?void 0:_.totalTime)/1e6:d),")"]})," ",_==null?void 0:_.totalTimePercent]})]}),(0,e.jsxs)("div",{className:"profile-common-styles-bcpc",children:[(0,e.jsx)(he,{width:5,text:"CPU Time",textClass:"profile-index-color-text-2"}),(0,e.jsx)("span",{className:"profile-index-color-text-1",children:_==null?void 0:_.cpuTimePercent})]}),(0,e.jsxs)("div",{className:"profile-common-styles-bcpc",children:[(0,e.jsx)(he,{width:5,roundColor:"rgb(255, 152, 0)",text:"I/O Time",textClass:"profile-index-color-text-2"}),(0,e.jsx)("span",{className:"profile-index-color-text-1",children:_==null?void 0:_.waitTimePercent})]})]})]}),(_==null||(t=_.errors)===null||t===void 0?void 0:t.length)>0&&(0,e.jsxs)("div",{className:(0,W.Z)("profile-index-top-ranking","profile-index-top-ranking-errors","profile-common-styles-pm"),children:[(0,e.jsxs)(Y.Z,{className:"profile-common-styles-few g-color-text-danger",children:["Errors",qn&&qn]}),_==null||(s=_.errors)===null||s===void 0?void 0:s.map(function(l,b){return(0,e.jsxs)("div",{className:"g-mt-10",children:[(0,e.jsx)("div",{className:"profile-index-color-text-1",children:l==null?void 0:l._errorType}),(0,e.jsxs)("div",{className:"profile-common-styles-gbp profile-index-color-text-2",children:[(0,e.jsxs)("div",{className:"g-class-ellipsis",children:["message:",(0,e.jsx)(_e,{placement:"rightTop",destroyTooltipOnHide:!0,content:l==null?void 0:l.message,buttonText:"message",children:l==null?void 0:l.message})]}),(0,e.jsxs)("div",{className:"g-class-ellipsis",children:["detail:",(0,e.jsx)(Kn.Z,{destroyTooltipOnHide:!0,title:l==null?void 0:l.detail,children:l==null?void 0:l.detail})]}),(0,e.jsxs)("div",{className:"g-class-ellipsis",children:["backtrace:",(0,e.jsx)(_e,{placement:"rightTop",destroyTooltipOnHide:!0,content:l==null?void 0:l.backtrace,buttonText:"backtrace",children:l==null?void 0:l.backtrace})]})]})]},b)})]}),(xn==null?void 0:xn.length)>0&&(0,e.jsxs)("div",{className:(0,W.Z)("profile-index-top-ranking","profile-common-styles-pm"),children:[(0,e.jsx)("div",{className:"profile-common-styles-few",children:"Statistics"}),(0,e.jsx)("div",{className:"g-mt-8",children:xn==null?void 0:xn.map(function(l,b){return(0,e.jsxs)("div",{className:"profile-common-styles-bcpc",children:[(0,e.jsx)("span",{children:l==null?void 0:l.display_name}),(0,e.jsx)("span",{className:"profile-index-color-text-1",children:ss(l.unit,l==null?void 0:l._value)})]},b)})})]}),(_==null||(a=_.labels)===null||a===void 0?void 0:a.length)>0&&(0,e.jsxs)("div",{className:(0,W.Z)("profile-index-top-ranking","profile-common-styles-pm"),children:[(0,e.jsx)("div",{className:"profile-common-styles-few",children:"Attributes"}),_==null||(u=_.labels)===null||u===void 0?void 0:u.map(function(l,b){var x;return(0,e.jsxs)("div",{className:"g-mt-10",children:[(0,e.jsx)("div",{className:"profile-index-color-text-1",children:l==null?void 0:l.name}),(0,e.jsx)("div",{children:(0,e.jsx)("div",{className:"profile-common-styles-gbp profile-index-color-text-2",children:l==null||(x=l.value)===null||x===void 0?void 0:x.map(function(f){return(0,e.jsx)("div",{style:{wordWrap:"break-word"},children:f},f)})})})]},b)})]})]}),O?(0,e.jsx)("div",{className:"g-box-c",style:{height:"700px"},children:(0,e.jsx)(le,{})}):(0,e.jsx)(e.Fragment,{children:(G==null?void 0:G.length)>0?(0,e.jsx)(wt,{queryId:p,plainData:G,graphSize:Hn,graphSizeHeight:Qn,graphRef:an,isLight:sn,handleResize:Zn,overviewInfoCurrent:un,onReady:function(b){an.current=b,b.setMaxZoom(2),b.on("node:click",function(x){ne(!1);var f=x.item._cfg.model;Me(i()(i()({},f),{},{isNode:!0}));var v=ze(b),j=x.item._cfg.id,S=v==null?void 0:v.find(function(N){return(N==null?void 0:N._cfg.id)===j});v==null||v.filter(function(N){return N._cfg.id!==j}).forEach(function(N){b.clearItemStates(N)}),Ie(b,S)}),b.on("node:mouseleave",function(){pn.current||(pn.current=document.getElementsByTagName("canvas")[0]),pn.current.style.cursor="move",Fn()}),b.on("node:mouseover",function(x){var f,v=x==null||(f=x.target)===null||f===void 0||(f=f.cfg)===null||f===void 0?void 0:f.name;if(v!=null&&v.includes("percentage-output-text")){var j,S=x.clientX,N=x.clientY,M=x==null||(j=x.item)===null||j===void 0||(j=j._cfg)===null||j===void 0||(j=j.model)===null||j===void 0?void 0:j.outputRows;ee({clientX:S-70,clientY:N-52,show:!0,text:"Output Rows: ".concat(Jn(M))})}else Fn()}),b.on("canvas:click",function(){Ne(""),ne(!0),te(un==null?void 0:un.current),Z==null||Z(un==null?void 0:un.current),Oe(b)}),b.on("canvas:dragstart",function(){fn.current.style.userSelect="none"}),b.on("canvas:dragend",function(){fn.current.style.userSelect="unset"}),b.on("edge:mouseover",function(x){var f,v,j=x==null||(f=x.target)===null||f===void 0||(f=f.cfg)===null||f===void 0?void 0:f.type,S=x==null||(v=x.item)===null||v===void 0||(v=v._cfg)===null||v===void 0||(v=v.model)===null||v===void 0?void 0:v._value,N=x.clientX,M=x.clientY;j==="text"?ee({clientX:N-40,clientY:M-50,show:!0,text:"Rows: ".concat(Jn(S))}):Fn()}),b.on("edge:mouseleave",function(){Fn()})}}):(0,e.jsx)("div",{style:{minHeight:"700px"},children:(0,e.jsx)(Ye,{title:"No Profile",paddingTop:"150px",subTitle:(0,e.jsxs)("div",{children:["Some queries, such as those with"," ",(0,e.jsx)("span",{style:{fontWeight:700},children:"USE"})," and"," ",(0,e.jsx)("span",{style:{fontWeight:700},children:"DESCRIBE"})," ","statements, have no query profile."]}),TopIcon:(0,e.jsx)(en,{icon:"databend-icon-zuzhijiagou"})})})})]}),(0,e.jsx)(Yt,{isLight:sn,metricsData:_==null?void 0:_.metrics,title:"Metrics Details: ".concat(_==null?void 0:_.name,"[").concat(_==null?void 0:_.id,"]  ").concat(_==null?void 0:_.totalTimePercent),onClose:function(){return Pe(!1)},visible:bs})]})},Ue=(0,T.memo)(as),os=o(92688),ls=o(55753),cs=os.Z.TextArea,us=function(n){var t,s=n.isDemo,a=s===void 0?!1:s,u=n.isNeedMetrics,h=u===void 0?!1:u,d=(0,T.useState)(""),y=k()(d,2),p=y[0],C=y[1],w=(0,T.useState)(""),g=k()(w,2),R=g[0],L=g[1],J=(0,T.useState)(0),D=k()(J,2),U=D[0],r=D[1],O=(0,T.useState)(!1),B=k()(O,2),H=B[0],A=B[1];function tn(){r(U+1);try{var E;L((E=JSON.parse(p))===null||E===void 0?void 0:E.query_id)}catch(sn){}}return(0,e.jsxs)("div",{className:"g-pa-24 g-align-s site-layout-right",style:{gap:"12px"},children:[(0,e.jsxs)(Y.Z,{size:12,className:"g-pl-10 g-pr",direction:"vertical",children:[!H&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(cs,{placeholder:"\u8BF7\u628A\u4F60\u751F\u6210\u7684 profile \u65E5\u5FD7json\u7C98\u8FDB\u6765",className:"g-border-radius-middle g-border g-color-bg-1",value:p,onChange:function(sn){C(sn.target.value)},style:{width:"320px",height:"calc(100vh - 100px)"}}),(0,e.jsxs)(Y.Z,{className:"g-box-center-between",children:[(0,e.jsxs)(Y.Z,{children:[(0,e.jsx)(Q.Z,{type:"link",href:"/",children:"Back"}),(0,e.jsx)(Q.Z,{type:"dashed",onClick:function(){C(ls.DEMO),tn()},children:"Demo"})]}),(0,e.jsxs)(Y.Z,{children:[(0,e.jsx)(Q.Z,{disabled:!p,type:"primary",onClick:function(){return r(U+1)},children:"Show"}),(0,e.jsx)(Q.Z,{onClick:function(){C("")},children:"Clear"})]})]})]}),(0,e.jsx)(Q.Z,{style:{position:"fixed",bottom:"80px",left:"10px",zIndex:10},type:"primary",onClick:function(){A(!H)},icon:(0,e.jsx)(en,{icon:H?"databend-icon-zhankai_expand-left":"databend-icon-zhankai_expand-right"})})]}),(0,e.jsx)("div",{className:"g-pa-6 g-color-bg-1 g-box-flex g-border-radius-middle",children:(0,e.jsx)(Ue,{offsetWidth:a?H?900:1200:H?100:695,isNeedMetrics:h,offsetHeight:60,countShow:U,outValue:p&&Be(p)?JSON.parse(p):"",showTextArea:H,queryId:R,queryDuration:0,profileRef:(t=document)===null||t===void 0?void 0:t.body})})]})},rs=us},14633:function(Mn,$,o){o.r($),o.d($,{texts:function(){return i}});var bn=o(97753);const i=[{value:`outValue?: JSON;
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
