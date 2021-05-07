---
sidebar_position: 2
---

# TimeseriesChart

TimeseriesChart is a React component for rendering timeseries-based data in realtime chart format. It uses `RealtimeChart` component under the hood.

## When?

Use TimeseriesChart when you are receiving timeseries data from subscription based data source (Websocket, PubSub, etc).

## Usage

```jsx
<TimeseriesChart
    width="100%"
    options={{
        frameCycle,
        rulerInterval,
    }}
    newBucket={newBucket}
    onClick={(evt, time) => console.log(`Maps to ${time} here!`)}
    renderRow={(tableBucket: Bucket, Row: any) => {
        const table = tableBucket.data as Table;
        return (
        <Row
            key={tableBucket.key}
            start={tableBucket.start}
            end={tableBucket.end}
        >
            {table.relname}
            {(tableBucket.buckets ?? []).map(
            (processBucket: Bucket, pIndex: number) => {
                const process = processBucket.data as Process;
                return (
                <Row
                    key={pIndex}
                    start={processBucket.start}
                    end={processBucket.end}
                >
                    <p>PID:{process.pid}</p>
                </Row>
                );
            }
            )}
        </Row>
        );
    }}
/>
```

TimeseriesChart will re-render every time you pass a new object to `newBucket` prop, giving you the realtime update effect. You need to transform your data to the format that `newBucket` expects: [RootBucket](/docs/types#rootbucket)

## Props

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| newBucket | [RootBucket](/docs/types#rootbucket) | No | `undefined` | The latest timeseries bucket data you've recevied. When its value is `undefined`, `renderNoDataFallback` is used to render the component. |
| width | `number` or `string` | No | `'100%'` | The width of the chart. If given in `number`, the width is set in `px`. If given in string, it tries to parse into `%`, relative to the parent element. |
| renderRow | [RenderRowFunc](/docs/types#renderrowfunc) | Yes | - | The function which formats the row. It's passed a bucket and the `Row` React component. Must return a JSX which is up to you to format and render as you like. |
| onClick | `(MouseEvent, number) => void` | No | `() => {}` | The function that gets triggered when user clicks on the chart. It gets reference to the `MouseEvent` which triggered this function, and a number representing the time within the chart (mapped by the position within the chart). |
| onTimeframeChange | `(number) => void` | No | `undefined` | If defined, executed when the chart's timeframe changes. Timeframe changes when the chart's boundary is recaulculated and re-rendered. The number passed is the new timeframe's start time. |
| renderNoDataFallback | `() => ReactElement` | No | `() => <div>Waiting for data...</div>` | The function that returns a JSX when `newBucket` prop is `undefined`. |
| containerClass | `string` | No | `""` | A list of HTML class names for the chart's container. |
| containerStyle | `Object` | No | `{}` | An object of React inline styles for the chart's container. |
| options | [Options](/docs/timeseries-chart#options) | No | `{}` | Refer to the [Options](/docs/timeseries-chart#options) section below. |

## Options

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| frameCycle | `number` | No | 60000 | The length of the time frame lifecycle in milliseconds, where one time frame represents the period that chart remains with the same time range between updates. |
| rulerInterval | `number` | No | 5000 | The time interval between each ruler. Not applicable if `hideRuler` option is `true`. |
| hideRuler | `boolean` | No | `false` | If true, hide the ruler (see the image below). |
| hideSeeker | `boolean` | No | `false` | If true, hide the seeker (see the image below). |
| hideTracker | `boolean` | No | `false` | If true, hide the tracker (the vertical line which tracks the mouse position - see the image below). |
| hideTrackerTooltip | `boolean` | No | `false` | If true, hide the tooltip for the tracker. |
| formatTime | `(number) => string` | No | `(time: number) => new Date(time).toLocaleTimeString()` | Formats the time label shown for the rulers and tracker tooltip. |

---

<img src ="../../img/timeseries-chart-options.png"/>
