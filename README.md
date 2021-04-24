# monochron

[![NPM version](https://badge.fury.io/js/esta.svg)](http://badge.fury.io/js/esta)

monochron is a lightweight React component library for visualizing arbitrary timeseries data in realtime.

It was initially created to power [plum](https://github.com/sanggonlee/plum) project.

![Screenshot-1](/screenshots/2.gif?raw=true)

## Installation

```sh
npm install monochron
```

## Usage

You can find examples in the [examples](https://github.com/sanggonlee/monochron/examples) folder.

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