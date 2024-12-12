export const DEMO = `{
        "query_id": "xxxxx-0fd9-485b",
        "tenant": "xxxxxx",
        "warehouse": "xxxxxxx",
        "warehouse_size": "Small",
        "profiles": [
            {
                "cpu_time": 0,
                "id": 1,
                "name": "Filter",
                "parent_id": null,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "tables.engine (#4) = 'SHARE'",
                "labels": [
                    {
                        "name": "Filter condition",
                        "value": [
                            "tables.engine (#4) = 'SHARE'"
                        ]
                    }
                ],
                "statistics": [
                    54693,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
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
                "id": 2,
                "name": "TableScan",
                "parent_id": 1,
                "wait_time": 0,
                "exchange_bytes": 0,
                "exchange_rows": 0,
                "title": "default.'system'.'tables'",
                "labels": [
                    {
                        "name": "Full table name",
                        "value": [
                            "default.'system'.'tables'"
                        ]
                    },
                    {
                        "name": "Columns (20 / 20)",
                        "value": [
                            "catalog",
                            "cluster_by",
                            "comment",
                            "created_on",
                            "data_compressed_size",
                            "data_size",
                            "database",
                            "dropped_on",
                            "engine",
                            "engine_full",
                            "index_size",
                            "is_attach",
                            "is_transient",
                            "name",
                            "num_rows",
                            "number_of_blocks",
                            "number_of_segments",
                            "owner",
                            "table_id",
                            "updated_on"
                        ]
                    },
                    {
                        "name": "Total partitions",
                        "value": [
                            "0"
                        ]
                    }
                ],
                "statistics": [
                    34970814,
                    147056727,
                    0,
                    0,
                    520,
                    108497,
                    108497,
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
                    "xxxxxxuzbVxxxxxxxxxx6M6FM3": [
                        {
                            "name": "meta_grpc_client_request_inflight",
                            "value": {
                                "Gauge": 0
                            }
                        },
                        {
                            "labels": {
                                "endpoint": "xxxx-0.x'x'x'x.xxxxx.xxxxxx.xxxxx.xxxx.lo3cal:2222",
                                "request": "StreamList"
                            },
                            "name": "meta_grpc_client_request_duration_ms_sum",
                            "value": {
                                "Untyped": 2
                            }
                        },
                        {
                            "labels": {
                                "endpoint": "xxxx-0.xxxx.xxxxx.xxxxxx.xxxxx.xxxx.lo3cal:2222",
                                "request": "StreamList"
                            },
                            "name": "meta_grpc_client_request_duration_ms_count",
                            "value": {
                                "Untyped": 66
                            }
                        },
                        {
                            "labels": {
                                "endpoint": "xxxx-0.xxxx.xxxxx.xxxxxx.xxxxx.xxxx.lo3cal:2222",
                                "request": "StreamMGet"
                            },
                            "name": "meta_grpc_client_request_duration_ms_sum",
                            "value": {
                                "Untyped": 0
                            }
                        },
                        {
                            "labels": {
                                "endpoint": "xxxx-0.xxxx.xxxxx.xxxxxx.xxxxx.xxxx.lo3cal:2222",
                                "request": "StreamMGet"
                            },
                            "name": "meta_grpc_client_request_duration_ms_count",
                            "value": {
                                "Untyped": 300
                            }
                        },
                        {
                            "labels": {
                                "endpoint": "xxxx-0.xxxx.xxxxx.xxxxxx.xxxxx.xxxx.lo3cal:2222",
                                "request": "StreamList"
                            },
                            "name": "meta_grpc_client_request_duration_ms_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 66,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 66,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 66,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 66,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 66,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 66,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 66,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 66,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 66,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 66,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 66,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 66,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 66,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 66,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 66,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 66,
                                        "less_than": 9223372036854776000
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "endpoint": "xxxx-0.xxxx.xxxxx.xxxxxx.xxxxx.xxxx.lo3cal:2222",
                                "request": "StreamMGet"
                            },
                            "name": "meta_grpc_client_request_duration_ms_bucket",
                            "value": {
                                "Histogram": [
                                    {
                                        "count": 300,
                                        "less_than": 10
                                    },
                                    {
                                        "count": 300,
                                        "less_than": 50
                                    },
                                    {
                                        "count": 300,
                                        "less_than": 100
                                    },
                                    {
                                        "count": 300,
                                        "less_than": 250
                                    },
                                    {
                                        "count": 300,
                                        "less_than": 500
                                    },
                                    {
                                        "count": 300,
                                        "less_than": 1000
                                    },
                                    {
                                        "count": 300,
                                        "less_than": 2500
                                    },
                                    {
                                        "count": 300,
                                        "less_than": 5000
                                    },
                                    {
                                        "count": 300,
                                        "less_than": 10000
                                    },
                                    {
                                        "count": 300,
                                        "less_than": 20000
                                    },
                                    {
                                        "count": 300,
                                        "less_than": 30000
                                    },
                                    {
                                        "count": 300,
                                        "less_than": 60000
                                    },
                                    {
                                        "count": 300,
                                        "less_than": 300000
                                    },
                                    {
                                        "count": 300,
                                        "less_than": 600000
                                    },
                                    {
                                        "count": 300,
                                        "less_than": 1800000
                                    },
                                    {
                                        "count": 300,
                                        "less_than": 9223372036854776000
                                    }
                                ]
                            }
                        },
                        {
                            "labels": {
                                "endpoint": "xxxx-0.xxxx.xxxxx.xxxxxx.xxxxx.xxxx.lo3cal:2222",
                                "request": "StreamMGet"
                            },
                            "name": "meta_grpc_client_request_success_total",
                            "value": {
                                "Counter": 300
                            }
                        },
                        {
                            "labels": {
                                "endpoint": "xxxx-0.xxxx.xxxxx.xxxxxx.xxxxx.xxxx.lo3cal:2222",
                                "request": "StreamList"
                            },
                            "name": "meta_grpc_client_request_success_total",
                            "value": {
                                "Counter": 66
                            }
                        }
                    ]
                },
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
            "MemoryUsage": {
                "desc": "The real time memory usage",
                "display_name": "memory usage",
                "index": 16,
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
            "RuntimeFilterPruneParts": {
                "desc": "The partitions pruned by runtime filter",
                "display_name": "parts pruned by runtime filter",
                "index": 15,
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
            "SpillReadBytes": {
                "desc": "The bytes spilled by read",
                "display_name": "bytes spilled by read",
                "index": 13,
                "plain_statistics": true,
                "unit": "Bytes"
            },
            "SpillReadCount": {
                "desc": "The number of spilled by read",
                "display_name": "numbers spilled by read",
                "index": 12,
                "plain_statistics": true,
                "unit": "Count"
            },
            "SpillReadTime": {
                "desc": "The time spent to read spill in millisecond",
                "display_name": "spilled time by read",
                "index": 14,
                "plain_statistics": false,
                "unit": "MillisSeconds"
            },
            "SpillWriteBytes": {
                "desc": "The bytes spilled by write",
                "display_name": "bytes spilled by write",
                "index": 10,
                "plain_statistics": true,
                "unit": "Bytes"
            },
            "SpillWriteCount": {
                "desc": "The number of spilled by write",
                "display_name": "numbers spilled by write",
                "index": 9,
                "plain_statistics": true,
                "unit": "Count"
            },
            "SpillWriteTime": {
                "desc": "The time spent to write spill in millisecond",
                "display_name": "spilled time by write",
                "index": 11,
                "plain_statistics": false,
                "unit": "MillisSeconds"
            },
            "WaitTime": {
                "desc": "The time spent to wait in nanoseconds, usually used to measure the time spent on waiting for I/O",
                "display_name": "wait time",
                "index": 1,
                "plain_statistics": false,
                "unit": "NanoSeconds"
            }
        }
    }
            `;
