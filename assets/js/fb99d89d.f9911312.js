(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),l=(n(0),n(91)),b={sidebar_position:2},i={unversionedId:"timeseries-chart",id:"timeseries-chart",isDocsHomePage:!1,title:"TimeseriesChart",description:"TimeseriesChart is a React component for rendering timeseries-based data in realtime chart format. It uses RealtimeChart component under the hood.",source:"@site/docs/timeseries-chart.md",sourceDirName:".",slug:"/timeseries-chart",permalink:"/monochron/docs/timeseries-chart",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/timeseries-chart.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/monochron/docs/intro"},next:{title:"RealtimeChart",permalink:"/monochron/docs/realtime-chart"}},c=[{value:"When?",id:"when",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[]},{value:"Options",id:"options",children:[]}],d={toc:c};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"TimeseriesChart is a React component for rendering timeseries-based data in realtime chart format. It uses ",Object(l.b)("inlineCode",{parentName:"p"},"RealtimeChart")," component under the hood."),Object(l.b)("h2",{id:"when"},"When?"),Object(l.b)("p",null,"Use TimeseriesChart when you are receiving timeseries data from subscription based data source (Websocket, PubSub, etc)."),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<TimeseriesChart\n    width="100%"\n    options={{\n        frameCycle,\n        rulerInterval,\n    }}\n    newBucket={newBucket}\n    onClick={(evt, time) => console.log(`Maps to ${time} here!`)}\n    renderRow={(tableBucket: Bucket, Row: any) => {\n        const table = tableBucket.data as Table;\n        return (\n        <Row\n            key={tableBucket.key}\n            start={tableBucket.start}\n            end={tableBucket.end}\n        >\n            {table.relname}\n            {(tableBucket.buckets ?? []).map(\n            (processBucket: Bucket, pIndex: number) => {\n                const process = processBucket.data as Process;\n                return (\n                <Row\n                    key={pIndex}\n                    start={processBucket.start}\n                    end={processBucket.end}\n                >\n                    <p>PID:{process.pid}</p>\n                </Row>\n                );\n            }\n            )}\n        </Row>\n        );\n    }}\n/>\n')),Object(l.b)("p",null,"TimeseriesChart will re-render every time you pass a new object to ",Object(l.b)("inlineCode",{parentName:"p"},"newBucket")," prop, giving you the realtime update effect. You need to transform your data to the format that ",Object(l.b)("inlineCode",{parentName:"p"},"newBucket")," expects: ",Object(l.b)("a",{parentName:"p",href:"/docs/types#rootbucket"},"RootBucket")),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Prop"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"newBucket"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/types#rootbucket"},"RootBucket")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"undefined")),Object(l.b)("td",{parentName:"tr",align:null},"The latest timeseries bucket data you've recevied. When its value is ",Object(l.b)("inlineCode",{parentName:"td"},"undefined"),", ",Object(l.b)("inlineCode",{parentName:"td"},"renderNoDataFallback")," is used to render the component.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"width"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"number")," or ",Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"'100%'")),Object(l.b)("td",{parentName:"tr",align:null},"The width of the chart. If given in ",Object(l.b)("inlineCode",{parentName:"td"},"number"),", the width is set in ",Object(l.b)("inlineCode",{parentName:"td"},"px"),". If given in string, it tries to parse into ",Object(l.b)("inlineCode",{parentName:"td"},"%"),", relative to the parent element.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"renderRow"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/types#renderrowfunc"},"RenderRowFunc")),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"The function which formats the row. It's passed a bucket and the ",Object(l.b)("inlineCode",{parentName:"td"},"Row")," React component. Must return a JSX which is up to you to format and render as you like.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"onClick"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"(MouseEvent, number) => void")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"() => {}")),Object(l.b)("td",{parentName:"tr",align:null},"The function that gets triggered when user clicks on the chart. It gets reference to the ",Object(l.b)("inlineCode",{parentName:"td"},"MouseEvent")," which triggered this function, and a number representing the time within the chart (mapped by the position within the chart).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"onTimeframeChange"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"(number) => void")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"undefined")),Object(l.b)("td",{parentName:"tr",align:null},"If defined, executed when the chart's timeframe changes. Timeframe changes when the chart's boundary is recaulculated and re-rendered. The number passed is the new timeframe's start time.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"renderNoDataFallback"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"() => ReactElement")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"() => <div>Waiting for data...</div>")),Object(l.b)("td",{parentName:"tr",align:null},"The function that returns a JSX when ",Object(l.b)("inlineCode",{parentName:"td"},"newBucket")," prop is ",Object(l.b)("inlineCode",{parentName:"td"},"undefined"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"containerClass"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'""')),Object(l.b)("td",{parentName:"tr",align:null},"A list of HTML class names for the chart's container.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"containerStyle"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Object")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"{}")),Object(l.b)("td",{parentName:"tr",align:null},"An object of React inline styles for the chart's container.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"options"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/timeseries-chart#options"},"Options")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"{}")),Object(l.b)("td",{parentName:"tr",align:null},"Refer to the ",Object(l.b)("a",{parentName:"td",href:"/docs/timeseries-chart#options"},"Options")," section below.")))),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Prop"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"frameCycle"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"60000"),Object(l.b)("td",{parentName:"tr",align:null},"The length of the time frame lifecycle in milliseconds, where one time frame represents the period that chart remains with the same time range between updates.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"rulerInterval"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"5000"),Object(l.b)("td",{parentName:"tr",align:null},"The time interval between each ruler. Not applicable if ",Object(l.b)("inlineCode",{parentName:"td"},"hideRuler")," option is ",Object(l.b)("inlineCode",{parentName:"td"},"true"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"hideRuler"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:null},"If true, hide the ruler (see the image below).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"hideSeeker"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:null},"If true, hide the seeker (see the image below).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"hideTracker"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:null},"If true, hide the tracker (the vertical line which tracks the mouse position - see the image below).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"hideTrackerTooltip"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:null},"If true, hide the tooltip for the tracker.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"formatTime"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"(number) => string")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"(time: number) => new Date(time).toLocaleTimeString()")),Object(l.b)("td",{parentName:"tr",align:null},"Formats the time label shown for the rulers and tracker tooltip.")))),Object(l.b)("hr",null),Object(l.b)("img",{src:"./timeseries-chart-options.png"}))}o.isMDXComponent=!0}}]);