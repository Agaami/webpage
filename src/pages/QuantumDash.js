// src/pages/QuantumDash.js
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSend, 
  FiUser, 
  FiMessageSquare, 
  FiBarChart2, 
  FiDownload, 
  FiX,
  FiDatabase,
  FiUpload,
  FiGrid,
  FiLayers,
  FiSearch,
  FiShield,
  FiCloud,
  FiHardDrive,
  FiCheck,
  FiPlay,
  FiPause,
  FiRefreshCw,
  FiChevronRight,
  FiClock
} from 'react-icons/fi';
import '../components/QuantumDash.css';

const QuantumDash = () => {
  // Version state
  const [version, setVersion] = useState('enterprise');
  const [activeView, setActiveView] = useState('chat');
  const [isConnected, setIsConnected] = useState(true);
  
  // Core state
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: version === 'enterprise' 
        ? "🔮 **QuantumDash Enterprise Online**\n\nConnected to Canonical Data Model v2.1 with 24 entities and 48 relationships. Ready for quantum analysis." 
        : "🚀 **QuantumDash Community Active**\n\nUpload your data file to begin quantum analysis and visualization.",
      sender: 'bot',
      timestamp: new Date(),
      type: 'welcome'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [visualizations, setVisualizations] = useState([]);
  const [activeViz, setActiveViz] = useState(null);
  
  // Data state
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [cdmData, setCdmData] = useState({
    status: 'connected',
    model: 'Canonical Data Model v2.1',
    entities: 24,
    relationships: 48,
    lastSync: new Date()
  });

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Quick Analysis Templates
  const analysisTemplates = [
    {
      title: "Sales Pulse",
      query: "Show real-time sales performance across regions",
      type: "pulse",
      color: "#00f0ff",
      description: "Live sales metrics with trend analysis"
    },
    {
      title: "Customer Matrix", 
      query: "Analyze customer segmentation and behavior patterns",
      type: "matrix",
      color: "#ff00ff",
      description: "Customer segmentation insights"
    },
    {
      title: "Revenue Stream",
      query: "Track revenue streams and growth metrics", 
      type: "stream",
      color: "#00ff88",
      description: "Revenue analysis and forecasting"
    },
    {
      title: "Performance Grid",
      query: "Monitor operational performance indicators",
      type: "grid", 
      color: "#ffaa00",
      description: "Performance metrics dashboard"
    }
  ];

  const handleSend = async () => {
    if (inputText.trim() === '') return;

    const userMessage = {
      id: Date.now(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
      type: 'query'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Check data source availability
    if ((version === 'enterprise' && !isConnected) || 
        (version === 'community' && uploadedFiles.length === 0)) {
      setTimeout(() => {
        const errorMessage = {
          id: Date.now() + 1,
          text: version === 'enterprise' 
            ? "⚠️ **CDM Connection Required**\n\nPlease connect to the Canonical Data Model to analyze enterprise data."
            : "📁 **Data File Required**\n\nPlease upload your data file to begin analysis.",
          sender: 'bot',
          timestamp: new Date(),
          type: 'error'
        };
        setMessages(prev => [...prev, errorMessage]);
        setIsLoading(false);
      }, 1000);
      return;
    }

    // Simulate AI processing with analysis
    setTimeout(() => {
      const response = generateAIResponse(inputText);
      setMessages(prev => [...prev, response]);
      
      if (response.visualization) {
        const newViz = {
          id: Date.now(),
          question: inputText,
          type: response.visualization.type,
          data: response.visualization.data,
          analysis: response.analysis,
          timestamp: new Date(),
          color: getRandomNeonColor()
        };
        setVisualizations(prev => [...prev, newViz]);
        setActiveViz(newViz.id);
        setActiveView('visualize');
      }
      
      setIsLoading(false);
    }, 2000);
  };

  const getRandomNeonColor = () => {
    const colors = ['#00f0ff', '#ff00ff', '#00ff88', '#ffaa00', '#ff0080', '#00ffea'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const generateAIResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    
    // Generate sample data based on query type
    let vizData = [];
    let vizType = 'pulse';
    let analysis = "";
    
    if (lowerInput.includes('sales') || lowerInput.includes('revenue')) {
      vizData = Array.from({length: 8}, (_, i) => ({
        label: `Q${(i % 4) + 1}-${2023 + Math.floor(i/4)}`,
        value: Math.floor(Math.random() * 100) + 50,
        trend: Math.random() > 0.5 ? 'up' : 'down',
        change: Math.floor(Math.random() * 30) - 10
      }));
      vizType = 'pulse';
      
      const total = vizData.reduce((sum, item) => sum + item.value, 0);
      const growth = vizData.filter(item => item.trend === 'up').length / vizData.length * 100;
      analysis = `📈 **Sales Analysis Complete**\n\n• **Total Revenue**: $${total.toLocaleString()}K\n• **Growth Rate**: ${growth.toFixed(1)}% positive quarters\n• **Key Insight**: ${growth > 50 ? 'Strong upward trajectory' : 'Mixed performance with optimization opportunities'}\n• **Recommendation**: Focus on high-performing regions and seasonal trends`;
    
    } else if (lowerInput.includes('customer') || lowerInput.includes('user')) {
      vizData = ['New Acquisition', 'Active Users', 'Premium Tier', 'Enterprise Clients'].map((segment, i) => ({
        segment,
        value: Math.floor(Math.random() * 1000) + 200,
        growth: Math.floor(Math.random() * 40) - 10,
        satisfaction: Math.floor(Math.random() * 20) + 80
      }));
      vizType = 'matrix';
      
      const totalUsers = vizData.reduce((sum, item) => sum + item.value, 0);
      const avgSatisfaction = vizData.reduce((sum, item) => sum + item.satisfaction, 0) / vizData.length;
      analysis = `👥 **Customer Insights Generated**\n\n• **Total User Base**: ${totalUsers.toLocaleString()} customers\n• **Average Satisfaction**: ${avgSatisfaction.toFixed(1)}/100\n• **Growth Patterns**: ${vizData[0].growth > 0 ? 'Strong new user acquisition' : 'Focus on retention needed'}\n• **Strategic Focus**: Premium tier shows highest satisfaction scores`;
    
    } else if (lowerInput.includes('performance') || lowerInput.includes('kpi')) {
      vizData = Array.from({length: 6}, (_, i) => ({
        metric: ['Response Time', 'Uptime %', 'Throughput', 'Error Rate', 'Capacity', 'Efficiency'][i],
        value: Math.floor(Math.random() * 100) + 25,
        target: 85,
        status: Math.random() > 0.3 ? 'optimal' : 'needs_attention'
      }));
      vizType = 'grid';
      
      const metTargets = vizData.filter(item => item.value >= item.target).length;
      analysis = `⚡ **Performance Metrics Analyzed**\n\n• **Target Achievement**: ${metTargets}/${vizData.length} KPIs met\n• **System Health**: ${metTargets > 3 ? 'Optimal' : 'Needs Optimization'}\n• **Critical Areas**: ${vizData.find(item => item.status === 'needs_attention')?.metric || 'All systems stable'}\n• **Action Items**: Monitor ${vizData.filter(item => item.value < item.target).map(item => item.metric).join(', ')}`;
    
    } else {
      vizData = Array.from({length: 6}, (_, i) => ({
        category: `Category ${String.fromCharCode(65 + i)}`,
        value: Math.floor(Math.random() * 100) + 20,
        trend: Math.random() > 0.5 ? 'up' : 'down',
        impact: ['High', 'Medium', 'Low'][Math.floor(Math.random() * 3)]
      }));
      vizType = 'pulse';
      
      analysis = `🔍 **General Analysis Complete**\n\n• **Data Points Processed**: ${vizData.length} categories\n• **Trend Distribution**: ${vizData.filter(item => item.trend === 'up').length} positive, ${vizData.filter(item => item.trend === 'down').length} negative\n• **Key Finding**: Data shows meaningful patterns requiring further investigation\n• **Next Steps**: Drill down into high-impact categories for detailed insights`;
    }

    return {
      id: Date.now() + 1,
      text: `🔮 **Quantum Analysis Complete**\n\nI've processed your query "${userInput}" through the ${version === 'enterprise' ? 'Canonical Data Model' : 'data matrix'} and generated comprehensive insights.`,
      sender: 'bot',
      timestamp: new Date(),
      type: 'analysis',
      analysis: analysis,
      visualization: {
        type: vizType,
        data: vizData
      }
    };
  };

  const handleQuickAnalysis = (template) => {
    setInputText(template.query);
    setTimeout(() => handleSend(), 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const exportViz = (vizId) => {
    const viz = visualizations.find(v => v.id === vizId);
    if (viz) {
      const dataStr = JSON.stringify({
        question: viz.question,
        analysis: viz.analysis,
        data: viz.data,
        type: viz.type,
        timestamp: viz.timestamp
      }, null, 2);
      const dataBlob = new Blob([dataStr], {type: 'application/json'});
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `quantum-analysis-${vizId}.json`;
      link.click();
    }
  };

  const deleteViz = (vizId) => {
    setVisualizations(prev => prev.filter(v => v.id !== vizId));
    if (activeViz === vizId) {
      setActiveViz(visualizations.length > 1 ? visualizations[0]?.id : null);
    }
  };

  const toggleConnection = () => {
    setIsConnected(!isConnected);
    setMessages(prev => [...prev, {
      id: Date.now(),
      text: isConnected ? "🔴 **CDM Connection Paused**\n\nTemporarily disconnected from Canonical Data Model." : "🟢 **CDM Synchronized**\n\nQuantum link established with live data stream.",
      sender: 'bot',
      timestamp: new Date(),
      type: 'system'
    }]);
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(files);
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: `📁 **Data Files Ready**\n\nSuccessfully uploaded ${files.length} file(s). You can now analyze your data.`,
        sender: 'bot', 
        timestamp: new Date(),
        type: 'system'
      }]);
    }, 1000);
  };

  return (
    <div className="quantum-dash cyberpunk">
      {/* Header */}
      <div className="qd-header">
        <div className="qd-header-main">
          <div className="qd-brand">
            <div className="qd-logo-glow">
              <span className="qd-logo-text">QUANTUMDASH</span>
              <div className="qd-version-tag">{version.toUpperCase()}</div>
            </div>
            <div className="qd-status-line">
              {version === 'enterprise' ? (
                <>
                  <div className={`qd-status-indicator ${isConnected ? 'online' : 'offline'}`}></div>
                  <span>CDM {isConnected ? 'SYNCED' : 'OFFLINE'}</span>
                  <div className="qd-entity-count">{cdmData.entities} Entities</div>
                </>
              ) : (
                <>
                  <div className={`qd-status-indicator ${uploadedFiles.length > 0 ? 'online' : 'offline'}`}></div>
                  <span>{uploadedFiles.length > 0 ? 'DATA READY' : 'AWAITING DATA'}</span>
                </>
              )}
            </div>
          </div>

          <div className="qd-controls">
            <div className="qd-version-switch">
              <button 
                className={version === 'community' ? 'active' : ''}
                onClick={() => setVersion('community')}
              >
                <FiCloud />
                Community
              </button>
              <button 
                className={version === 'enterprise' ? 'active' : ''}
                onClick={() => setVersion('enterprise')}
              >
                <FiShield />
                Enterprise
              </button>
            </div>

            {version === 'enterprise' && (
              <button 
                className={`qd-connection-btn ${isConnected ? 'connected' : 'disconnected'}`}
                onClick={toggleConnection}
              >
                {isConnected ? <FiPause /> : <FiPlay />}
                {isConnected ? 'PAUSE SYNC' : 'RESUME SYNC'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Data Upload Section */}
      {version === 'community' && uploadedFiles.length === 0 && activeView === 'chat' && (
        <div className="qd-data-upload-main">
          <div className="qd-upload-hero">
            <div className="qd-upload-content">
              <FiUpload className="qd-upload-hero-icon" />
              <h2>Ready for Quantum Analysis</h2>
              <p>Upload your data file to unlock powerful insights and visualizations</p>
              <div className="qd-upload-zone">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  accept=".csv,.xlsx,.xls,.json,.parquet"
                  id="file-upload-main"
                  multiple
                />
                <label htmlFor="file-upload-main" className="qd-upload-label-main">
                  <div className="qd-upload-glow"></div>
                  <span>DROP FILES HERE OR CLICK TO BROWSE</span>
                  <small>Supports CSV, Excel, JSON, Parquet • Max 100MB</small>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Interface */}
      {(version === 'enterprise' || uploadedFiles.length > 0) && (
        <div className="qd-main-interface">
          {/* Side Panel */}
          <div className="qd-side-panel">
            {/* Quick Analysis Templates */}
            <div className="qd-templates-section">
              <h3>QUICK ANALYSIS</h3>
              <div className="qd-templates-grid">
                {analysisTemplates.map((template, index) => (
                  <motion.div
                    key={index}
                    className="qd-template-card"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleQuickAnalysis(template)}
                    style={{ '--glow-color': template.color }}
                  >
                    <div className="qd-template-glow"></div>
                    <div className="qd-template-icon"></div>
                    <h4>{template.title}</h4>
                    <p>{template.description}</p>
                    <div className="qd-template-arrow">
                      <FiChevronRight />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Optimized Visualizations List */}
            <div className="qd-viz-section">
              <div className="qd-viz-header">
                <h3>ANALYSIS HISTORY</h3>
                <span className="qd-viz-count">{visualizations.length}</span>
              </div>
              <div className="qd-viz-list">
                {visualizations.slice(-10).reverse().map((viz) => (
                  <div
                    key={viz.id}
                    className={`qd-viz-item ${activeViz === viz.id ? 'active' : ''}`}
                    onClick={() => {
                      setActiveViz(viz.id);
                      setActiveView('visualize');
                    }}
                  >
                    <div className="qd-viz-preview" style={{ backgroundColor: viz.color }}></div>
                    <div className="qd-viz-info">
                      <span className="qd-viz-title">{viz.question.substring(0, 30)}...</span>
                      <div className="qd-viz-meta">
                        <span className="qd-viz-type">{viz.type}</span>
                        <span className="qd-viz-time">
                          {viz.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                    <button 
                      className="qd-viz-delete"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteViz(viz.id);
                      }}
                    >
                      <FiX />
                    </button>
                  </div>
                ))}
                {visualizations.length === 0 && (
                  <div className="qd-no-viz">
                    <FiBarChart2 />
                    <p>No analysis yet</p>
                    <span>Run your first analysis to see results</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Workspace */}
          <div className="qd-workspace">
            {/* View Toggle */}
            <div className="qd-view-toggle">
              <button 
                className={activeView === 'chat' ? 'active' : ''}
                onClick={() => setActiveView('chat')}
              >
                QUANTUM CHAT
              </button>
              <button 
                className={activeView === 'visualize' ? 'active' : ''}
                onClick={() => setActiveView('visualize')}
                disabled={visualizations.length === 0}
              >
                DATA VISUALIZATION
              </button>
            </div>

            {/* Chat Interface */}
            {activeView === 'chat' && (
              <div className="qd-chat-interface">
                <div className="qd-chat-messages">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`qd-message ${message.sender === 'user' ? 'user' : 'bot'} ${message.type}`}
                    >
                      <div className="qd-message-avatar">
                        {message.sender === 'user' ? (
                          <div className="qd-user-avatar">
                            <FiUser />
                          </div>
                        ) : (
                          <div className="qd-bot-avatar">
                            <div className="qd-ai-glow">AI</div>
                          </div>
                        )}
                      </div>
                      <div className="qd-message-content">
                        <div className="qd-message-text">
                          {message.text.split('\n').map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                        </div>
                        {message.analysis && (
                          <div className="qd-analysis-section">
                            <div className="qd-analysis-header">
                              <FiBarChart2 />
                              <span>QUANTUM INSIGHTS</span>
                            </div>
                            <div className="qd-analysis-content">
                              {message.analysis.split('\n').map((line, i) => (
                                <p key={i}>{line}</p>
                              ))}
                            </div>
                          </div>
                        )}
                        <span className="qd-message-time">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="qd-message bot loading">
                      <div className="qd-message-avatar">
                        <div className="qd-bot-avatar">
                          <div className="qd-ai-glow">AI</div>
                        </div>
                      </div>
                      <div className="qd-message-content">
                        <div className="qd-quantum-loading">
                          <div className="qd-pulse-dot"></div>
                          <div className="qd-pulse-dot"></div>
                          <div className="qd-pulse-dot"></div>
                          <span>Processing quantum data stream...</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                <div className="qd-chat-input-container">
                  <div className="qd-input-glow">
                    <textarea
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={`Ask anything about your ${version === 'enterprise' ? 'enterprise data' : 'uploaded data'}...`}
                      rows="2"
                    />
                    <button 
                      onClick={handleSend}
                      disabled={isLoading || inputText.trim() === ''}
                      className="qd-send-button"
                    >
                      <FiSend />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Improved Visualization Interface */}
            {activeView === 'visualize' && activeViz && (
              <div className="qd-viz-interface">
                {visualizations.filter(viz => viz.id === activeViz).map((viz) => (
                  <div key={viz.id} className="qd-viz-container">
                    <div className="qd-viz-header">
                      <div className="qd-viz-title-section">
                        <h2>{viz.question}</h2>
                        <div className="qd-viz-meta">
                          <span className="qd-viz-type-tag">{viz.type}</span>
                          <span className="qd-viz-time">{viz.timestamp.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="qd-viz-actions">
                        <button 
                          className="qd-export-btn"
                          onClick={() => exportViz(viz.id)}
                        >
                          <FiDownload />
                          EXPORT
                        </button>
                        <button 
                          className="qd-refresh-btn"
                          onClick={() => {
                            const updatedViz = {...viz, timestamp: new Date()};
                            setVisualizations(prev => 
                              prev.map(v => v.id === viz.id ? updatedViz : v)
                            );
                          }}
                        >
                          <FiRefreshCw />
                          REFRESH
                        </button>
                      </div>
                    </div>

                    <div className="qd-viz-content">
                      {/* Visualization */}
                      <div className="qd-viz-display">
                        {/* Pulse Visualization */}
                        {viz.type === 'pulse' && (
                          <div className="qd-pulse-viz">
                            <div className="qd-pulse-grid">
                              {viz.data.map((item, index) => (
                                <div key={index} className="qd-pulse-item">
                                  <div 
                                    className="qd-pulse-bar"
                                    style={{
                                      height: `${(item.value / 150) * 100}%`,
                                      backgroundColor: viz.color
                                    }}
                                  >
                                    <div className="qd-pulse-value">{item.value}</div>
                                  </div>
                                  <div className="qd-pulse-label">{item.label}</div>
                                  <div className={`qd-pulse-trend ${item.trend}`}>
                                    {item.trend === 'up' ? '↗' : '↘'}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Matrix Visualization */}
                        {viz.type === 'matrix' && (
                          <div className="qd-matrix-viz">
                            <div className="qd-matrix-grid">
                              {viz.data.map((item, index) => (
                                <div key={index} className="qd-matrix-cell">
                                  <div className="qd-matrix-header">
                                    <h4>{item.segment}</h4>
                                    <span className={`qd-growth ${item.growth >= 0 ? 'positive' : 'negative'}`}>
                                      {item.growth >= 0 ? '+' : ''}{item.growth}%
                                    </span>
                                  </div>
                                  <div className="qd-matrix-value" style={{ color: viz.color }}>
                                    {item.value.toLocaleString()}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Grid Visualization */}
                        {viz.type === 'grid' && (
                          <div className="qd-grid-viz">
                            <div className="qd-metrics-grid">
                              {viz.data.map((item, index) => (
                                <div key={index} className="qd-metric-card">
                                  <div className="qd-metric-header">
                                    <span>{item.metric}</span>
                                    <div className="qd-metric-progress">
                                      <div 
                                        className="qd-progress-bar"
                                        style={{
                                          width: `${(item.value / item.target) * 100}%`,
                                          backgroundColor: viz.color
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                  <div className="qd-metric-values">
                                    <span className="qd-current-value" style={{ color: viz.color }}>
                                      {item.value}
                                    </span>
                                    <span className="qd-target-value">/ {item.target}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Analysis Insights */}
                      <div className="qd-analysis-panel">
                        <div className="qd-analysis-header">
                          <FiBarChart2 />
                          <h3>QUANTUM INSIGHTS</h3>
                        </div>
                        <div className="qd-analysis-content">
                          {viz.analysis.split('\n').map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CDM Info for Enterprise */}
                    {version === 'enterprise' && (
                      <div className="qd-cdm-info">
                        <div className="qd-cdm-badge">
                          <FiDatabase />
                          <span>Canonical Data Model</span>
                          <div className="qd-sync-status">
                            {isConnected ? 'LIVE SYNC' : 'PAUSED'}
                          </div>
                        </div>
                        <div className="qd-cdm-stats">
                          <div className="qd-cdm-stat">
                            <span>Entities</span>
                            <strong>{cdmData.entities}</strong>
                          </div>
                          <div className="qd-cdm-stat">
                            <span>Relationships</span>
                            <strong>{cdmData.relationships}</strong>
                          </div>
                          <div className="qd-cdm-stat">
                            <span>Last Sync</span>
                            <strong>{cdmData.lastSync.toLocaleTimeString()}</strong>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuantumDash;
