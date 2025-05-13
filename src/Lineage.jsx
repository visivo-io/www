import React, { useState, useRef, useEffect } from 'react';
import ReactFlow, { Handle, MarkerType } from 'react-flow-renderer';
// Import icons from react-icons
import { HiOutlineServer, HiOutlineDatabase, HiOutlineCalculator, HiOutlineChartBar, HiOutlineViewGrid } from 'react-icons/hi';
import { MdScatterPlot } from 'react-icons/md';

// Custom pill-style node component
const PillNode = ({ data }) => {
  const { label, Icon, bgClass, textClass, borderClass } = data;
  return (
    <div
      className={`flex items-center p-2 shadow-md rounded-2xl border cursor-pointer hover:opacity-80 hover:shadow-lg transition ${bgClass} ${borderClass}`}
      style={{ minWidth: 100, maxWidth: 300 }}
    >
      <Handle type="target" position="left" style={{ top: '50%' }} />
      <div className="flex items-center flex-1 min-w-0">
        <Icon className={`w-5 h-5 mr-2 ${textClass}`} />
        <span className={`text-sm font-medium ${textClass} truncate`}>{label}</span>
      </div>
      <Handle type="source" position="right" style={{ top: '50%' }} />
    </div>
  );
};

// Node style definitions
const NODE_STYLES = {
  sources:    { bgClass: 'bg-green-100',  textClass: 'text-green-800',  borderClass: 'border-green-200',  Icon: HiOutlineServer },
  models:     { bgClass: 'bg-indigo-100', textClass: 'text-indigo-800', borderClass: 'border-indigo-200', Icon: HiOutlineDatabase },
  metrics:    { bgClass: 'bg-cyan-100',   textClass: 'text-cyan-800',   borderClass: 'border-cyan-200',   Icon: HiOutlineCalculator },
  traces:     { bgClass: 'bg-orange-100', textClass: 'text-orange-800', borderClass: 'border-orange-200', Icon: MdScatterPlot },
  charts:     { bgClass: 'bg-blue-100',   textClass: 'text-blue-800',   borderClass: 'border-blue-200',   Icon: HiOutlineChartBar },
  dashboards: { bgClass: 'bg-purple-100', textClass: 'text-purple-800', borderClass: 'border-purple-200', Icon: HiOutlineViewGrid }
};

// Static graph data
const nodes = [
  { id: 'sources',    position: { x: 0,   y: 0 }, data: { label: 'Sources',    ...NODE_STYLES.sources },    type: 'pill' },
  { id: 'models',     position: { x: 200, y: 0 }, data: { label: 'Models',     ...NODE_STYLES.models },     type: 'pill' },
  { id: 'metrics',    position: { x: 400, y: 0 }, data: { label: 'Metrics',    ...NODE_STYLES.metrics },    type: 'pill' },
  { id: 'traces',     position: { x: 600, y: 0 }, data: { label: 'Traces',     ...NODE_STYLES.traces },     type: 'pill' },
  { id: 'charts',     position: { x: 800, y: 0 }, data: { label: 'Charts',     ...NODE_STYLES.charts },     type: 'pill' },
  { id: 'dashboards', position: { x: 1000,y: 0 }, data: { label: 'Dashboards', ...NODE_STYLES.dashboards }, type: 'pill' }
];
const edges = [
  { id: 'e1', source: 'sources',    target: 'models',     markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e2', source: 'models',     target: 'metrics',    markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e3', source: 'metrics',    target: 'traces',     markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e4', source: 'traces',     target: 'charts',     markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e5', source: 'charts',     target: 'dashboards', markerEnd: { type: MarkerType.ArrowClosed } }
];

// Info details for each node
const INFO = {
  sources: {
    title: 'Sources',
    description: 'Connections to your data systems (databases, files, APIs); define credentials, hosts, and env-based configs.',
    yaml: `sources:
  - name: domain_source
    type: postgresql
    database: app_db
    host: "{{ env_var('APP_HOST') }}"
    username: "{{ env_var('APP_DATABASE_USERNAME') }}"
    password: "{{ env_var('APP_DATABASE_PASSWORD') }}"`,
    note: 'Static example showing a Postgres source with env var interpolations.',
    points: [
      'Combine multiple sources (Postgres, Snowflake, CSV, APIs) in one project.',
      'Use env vars for host/credentials to switch between dev/staging/prod.',
      'Supports SQL and script-based connectors for custom data formats.'
    ]
  },
  models: {
    title: 'Models',
    description: 'SQL or script-based transformations producing curated tables for analysis.',
    yaml: `models:
  - name: widget_sales
    sql: select * from widget_sales`,
    note: 'Simple SQL model selecting all fields from a source.',
    points: [
      'Version-controlled transformation logic (SQL/scripts).',
      'Join/clean/aggregate data from one or more sources.',
      'Leverage dbt integration or custom model definitions.'
    ]
  },
  metrics: {
    title: 'Metrics',
    description: 'Key business measures defined once and reused across visuals (single source of truth).',
    yaml: `traces:
  - name: weekly_orders
    model: \${ ref(orders) }
    columns:
      week: date_trunc('week', order_date)
      order_count: count(*)
    props:
      type: bar
      x: column(week)
      y: column(order_count)`,
    note: 'Defines a bar metric for weekly order counts.',
    points: [
      'Define metrics as traces for reuse consistency.',
      'Ensure testable, centralized metric logic.',
      'Reuse metrics in multiple charts without duplicating query code.'
    ]
  },
  traces: {
    title: 'Traces',
    description: 'Bind a model/metric to a visual encoding (chart type, axes, cohorts) via Plotly.',
    yaml: `traces:
  - name: revenue_by_product
    model: \${ ref(orders) }
    cohort_on: product_category
    columns:
      week: date_trunc('week', order_date)
      revenue: sum(amount)
    props:
      type: line
      x: column(week)
      y: column(revenue)`,
    note: 'Line trace splitting revenue by product category.',
    points: [
      'Choose from 15+ Plotly trace types (line, bar, scatter, pie).',
      'Use `cohort_on` to split data series by dimension.',
      'Configure axes, tooltips, and interactivity per trace.'
    ]
  },
  charts: {
    title: 'Charts',
    description: 'Combine multiple traces into one view with layout controls (titles, legends, selectors).',
    yaml: `charts:
  - name: sales_over_time
    traces:
      - \${ ref(weekly_orders) }
      - \${ ref(weekly_revenue) }
    layout:
      title:
        text: "Orders and Revenue Per Week"
      legend:
        orientation: "h"`,
    note: 'Chart combining orders and revenue traces with a horizontal legend.',
    points: [
      'Overlay multiple metrics in one chart for correlation.',
      'Customizable legends, titles, and selectors.',
      'Interactive filtering and toggles supported.'
    ]
  },
  dashboards: {
    title: 'Dashboards',
    description: 'Arrange charts, filters, and text in rows/items for a holistic view.',
    yaml: `dashboards:
  - name: sales_dashboard
    rows:
      - items:
          - chart: \${ ref(sales_over_time) }
          - chart: \${ ref(top_products) }`,
    note: 'Dashboard showing two charts side by side.',
    points: [
      'Grid layout with rows and items for responsive design.',
      'Mix charts, tables, and filters in one view.',
      'Adjust row heights and column spans per item.'
    ]
  }
};

export default function VisivoDataFlow({ infoLayout = 'bottom' }) {
  const [selected, setSelected] = useState('sources');
  const nodeTypes = { pill: PillNode };
  const reactFlowWrapper = useRef(null);
  const reactFlowInstanceRef = useRef(null);

  const isSide = infoLayout === 'side';
  const containerClass = 'flex flex-row md:flex-col h-[32rem] md:h-[32rem] w-full';
  const graphClass = 'w-1/3 h-full md:w-full md:h-1/6 min-w-[120px] min-h-[120px]';
  const infoClass = 'w-2/3 h-full md:w-full md:h-5/6';

  // Resize handler to fit view
  useEffect(() => {
    function handleResize() {
      if (reactFlowInstanceRef.current) {
        reactFlowInstanceRef.current.fitView();
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-8 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">How Visivo Connects Your Data</h2>
        <div className={containerClass}>
          <div className={graphClass} ref={reactFlowWrapper}>
            <div className="h-full w-full md:h-40 md:w-full">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                onNodeClick={(_, node) => setSelected(node.id)}
                fitView
                onInit={instance => {
                  reactFlowInstanceRef.current = instance;
                  instance.fitView();
                }}
                panOnScroll={false}
                panOnDrag={false}
                zoomOnScroll={false}
                zoomOnPinch={false}
                zoomOnDoubleClick={false}
              />
            </div>
          </div>
          <div className={infoClass}>
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-sm h-full">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">{INFO[selected].title}</h3>
              <p className="mb-4 text-gray-800 dark:text-gray-300">{INFO[selected].description}</p>
              <pre className="mb-2 whitespace-pre-wrap bg-gray-100 dark:bg-gray-900 p-3 rounded-md text-xs text-gray-800 dark:text-gray-200">
                {INFO[selected].yaml}
              </pre>
              <p className="mb-4 text-gray-500 italic">{INFO[selected].note}</p>
              <ul className="list-disc pl-5 text-gray-800 dark:text-gray-300">
                {INFO[selected].points.map((pt, i) => (
                  <li key={`${selected}-${i}`} className="mb-1">{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
