# monochron

[![NPM version](https://badge.fury.io/js/esta.svg)](http://badge.fury.io/js/esta)
[![Documentation Status](https://readthedocs.org/projects/monochron/badge/?version=latest)](https://sanggonlee.github.io/monochron/?badge=latest)

monochron is a lightweight React component library for visualizing arbitrary timeseries data in realtime.

It was initially created to power [plum](https://github.com/sanggonlee/plum) project (along with [pogo](https://github.com/sanggonlee/pogo)).

![Screenshot-1](/screenshots/2.gif?raw=true)

## Installation

```sh
npm install monochron
```

## Usage

Documentation can be found [here](https://sanggonlee.github.io/monochron/).

### Examples
- [Simple RealtimeChart](https://codesandbox.io/s/monochron-simple-realtimechart-6uzoz?file=/src/App.js)
- [GIF images in TimeseriesChart](https://codesandbox.io/s/monochron-gif-timeseries-vwkwu)
- [Nested rows in TimeseriesChart](https://codesandbox.io/s/monochron-nested-rows-z7dfu)
- [plum](https://github.com/sanggonlee/plum/ui/src/components/Tables/Tables.tsx)

### TimeseriesChart

Realtime timeseries visualization (when you are receiving a bucketed timeseries data at a time) using `TimeseriesChart` component:

```js
<TimeseriesChart
    newBucket={newBucket}
    options={{
        frameCycle: 20000,
    }}
    renderRow={(bucket, Row) => (
        <Row
            key={bucket.key}
            start={bucket.start}
            end={bucket.end}
            containerClassName="whitespace-nowrap overflow-hidden"
        >
            <img
                src={bucket.data.url}
                style={{
                    height: 120,
                    objectFit: "cover",
                }}
            />
        </Row>
    )}
/>
```
The chart gets an update every time you pass new data to the `newBucket` prop.

### RealtimeChart

When you have more generic, per data entry (as opposed to per timeseries bucket), use `RealtimeChart` component (`TimeseriesChart` uses `RealtimeChart` under the hood):

```js
<RealtimeChart
    width={1000}
    currentTime={time}
    rows={buckets}
    renderRow={(bucket, Row) => {
        return (
            <Row key={bucket.key} start={bucket.start} end={bucket.end}>
                {bucket.data}
            </Row>
        );
    }}
/>
```
The chart gets an update every time you pass new data to the `rows` prop.