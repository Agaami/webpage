import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiMessageSquare, FiBarChart2, FiDownload } from 'react-icons/fi';
import '../components/QuantumDash.css';

const QuantumDash = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your QuantumDash AI assistant. I can help you analyze your data and generate insights. What would you like to know about your data?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chartData, setChartData] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (inputText.trim() === '') return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Simulate API call to backend
    setTimeout(() => {
      const botResponse = generateBotResponse(inputText);
      setMessages(prev => [...prev, botResponse]);
      
      // If the response includes chart data, set it
      if (botResponse.chartData) {
        setChartData(botResponse.chartData);
      }
      
      setIsLoading(false);
    }, 1500);
  };

  const generateBotResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    
    // Mock responses - in real implementation, this would come from your backend
    if (lowerInput.includes('sales') || lowerInput.includes('revenue')) {
      return {
        id: messages.length + 2,
        text: "Here's the sales analysis for the last quarter. The data shows a 15% growth compared to previous quarter, with highest sales in the technology sector.",
        sender: 'bot',
        timestamp: new Date(),
        chartData: {
          type: 'bar',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                label: 'Sales (in thousands)',
                data: [65, 59, 80, 81, 56, 72],
                backgroundColor: 'rgba(0, 194, 203, 0.6)',
                borderColor: 'rgba(0, 194, 203, 1)',
                borderWidth: 2
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Sales Analysis - Q2 2024'
              }
            }
          }
        }
      };
    } else if (lowerInput.includes('customer') || lowerInput.includes('user')) {
      return {
        id: messages.length + 2,
        text: "Customer analysis shows a 25% increase in new user acquisition. The retention rate is at 85%, which is above industry average.",
        sender: 'bot',
        timestamp: new Date(),
        chartData: {
          type: 'line',
          data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [
              {
                label: 'New Users',
                data: [120, 150, 180, 210],
                borderColor: 'rgba(184, 77, 255, 1)',
                backgroundColor: 'rgba(184, 77, 255, 0.1)',
                tension: 0.4
              },
              {
                label: 'Active Users',
                data: [450, 480, 520, 510],
                borderColor: 'rgba(0, 194, 203, 1)',
                backgroundColor: 'rgba(0, 194, 203, 0.1)',
                tension: 0.4
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'User Growth Analytics'
              }
            }
          }
        }
      };
    } else if (lowerInput.includes('performance') || lowerInput.includes('metrics')) {
      return {
        id: messages.length + 2,
        text: "Performance metrics are looking strong. System uptime is at 99.9%, and average response time is 120ms. Here are the detailed metrics:",
        sender: 'bot',
        timestamp: new Date(),
        chartData: {
          type: 'doughnut',
          data: {
            labels: ['Optimal', 'Good', 'Needs Attention', 'Critical'],
            datasets: [
              {
                data: [65, 25, 8, 2],
                backgroundColor: [
                  'rgba(0, 194, 203, 0.8)',
                  'rgba(184, 77, 255, 0.8)',
                  'rgba(255, 206, 86, 0.8)',
                  'rgba(255, 99, 132, 0.8)'
                ],
                borderWidth: 2
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'System Performance Distribution'
              }
            }
          }
        }
      };
    } else {
      return {
        id: messages.length + 2,
        text: "I've analyzed your query and found relevant insights in the data. Would you like me to create a visualization or provide more detailed analysis on any specific aspect?",
        sender: 'bot',
        timestamp: new Date(),
        chartData: {
          type: 'bar',
          data: {
            labels: ['Category A', 'Category B', 'Category C', 'Category D'],
            datasets: [
              {
                label: 'Distribution',
                data: [30, 45, 25, 60],
                backgroundColor: 'rgba(0, 194, 203, 0.6)'
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'General Data Analysis'
              }
            }
          }
        }
      };
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const exportChart = () => {
    if (chartData) {
      // In real implementation, this would export the chart
      alert('Chart exported successfully!');
    }
  };

  return (
    <div className="quantum-dash">
      {/* Header */}
      <header className="qd-header">
        <div className="qd-header-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="qd-logo"
          >
            <h1>QuantumDash</h1>
            <p>AI-Powered Data Analytics</p>
          </motion.div>
          <nav className="qd-nav">
            <button className="qd-nav-btn" onClick={exportChart}>
              <FiDownload /> Export
            </button>
            <button className="qd-nav-btn">
              <FiBarChart2 /> Insights
            </button>
          </nav>
        </div>
      </header>

      <div className="qd-container">
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="qd-sidebar"
        >
          <div className="qd-sidebar-section">
            <h3>Quick Queries</h3>
            <button 
              className="qd-quick-query"
              onClick={() => setInputText("Show me sales performance for last quarter")}
            >
              Sales Performance
            </button>
            <button 
              className="qd-quick-query"
              onClick={() => setInputText("Analyze customer growth metrics")}
            >
              Customer Analytics
            </button>
            <button 
              className="qd-quick-query"
              onClick={() => setInputText("Show system performance metrics")}
            >
              Performance Metrics
            </button>
          </div>

          <div className="qd-sidebar-section">
            <h3>Data Sources</h3>
            <div className="qd-data-source">
              <span className="qd-source-status active"></span>
              <span>Sales Database</span>
            </div>
            <div className="qd-data-source">
              <span className="qd-source-status active"></span>
              <span>User Analytics</span>
            </div>
            <div className="qd-data-source">
              <span className="qd-source-status"></span>
              <span>CRM System</span>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="qd-main">
          {/* Chat Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="qd-chat-section"
          >
            <div className="qd-chat-header">
              <h2>Data Analysis Chat</h2>
              <p>Ask questions about your data and get AI-powered insights</p>
            </div>

            <div className="qd-chat-messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`qd-message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
                >
                  <div className="qd-message-avatar">
                    {message.sender === 'user' ? <FiUser /> : <FiMessageSquare />}
                  </div>
                  <div className="qd-message-content">
                    <p>{message.text}</p>
                    <span className="qd-message-time">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="qd-message bot-message">
                  <div className="qd-message-avatar">
                    <FiMessageSquare />
                  </div>
                  <div className="qd-message-content">
                    <div className="qd-typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            <div className="qd-chat-input">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about your data... (e.g., 'Show sales trends', 'Analyze user behavior')"
                rows="2"
              />
              <button 
                onClick={handleSend} 
                disabled={isLoading || inputText.trim() === ''}
                className="qd-send-btn"
              >
                <FiSend />
              </button>
            </div>
          </motion.div>

          {/* Chart Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="qd-chart-section"
          >
            <div className="qd-chart-header">
              <h2>Data Visualization</h2>
              <p>AI-generated charts and insights based on your queries</p>
            </div>

            <div className="qd-chart-container">
              {chartData ? (
                <div className="qd-chart">
                  <div className="qd-chart-placeholder">
                    <h3>{chartData.options.plugins.title.text}</h3>
                    <div className="qd-chart-preview">
                      {/* In real implementation, you would use Chart.js or similar here */}
                      <div className="qd-chart-visual">
                        <div className="qd-chart-bars">
                          {chartData.data.datasets[0].data.map((value, index) => (
                            <div
                              key={index}
                              className="qd-chart-bar"
                              style={{
                                height: `${(value / Math.max(...chartData.data.datasets[0].data)) * 100}%`,
                                backgroundColor: chartData.data.datasets[0].backgroundColor
                              }}
                            >
                              <span className="qd-chart-value">{value}</span>
                            </div>
                          ))}
                        </div>
                        <div className="qd-chart-labels">
                          {chartData.data.labels.map((label, index) => (
                            <span key={index} className="qd-chart-label">{label}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="qd-chart-insights">
                      <h4>Key Insights</h4>
                      <ul>
                        <li>Data shows positive growth trend</li>
                        <li>Peak performance observed in recent periods</li>
                        <li>Recommendation: Continue current strategy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="qd-chart-placeholder">
                  <div className="qd-chart-empty">
                    <FiBarChart2 size={48} />
                    <h3>No Chart Generated</h3>
                    <p>Start a conversation with the AI assistant to generate visualizations</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default QuantumDash;