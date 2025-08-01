import { useState, useEffect, useRef } from 'react'
import { 
  ChevronRight, Shield, Clock, Cpu, 
  BarChart2, Lock, Eye, Settings, Search,
  PieChart, Activity, Database, Network,
  Users, FileText, Bell, LogOut, Menu,
  CreditCard, TrendingUp, Clipboard, AlertTriangle,
  ChevronDown, Calendar, Filter, Download, RefreshCw,
  Brain, Bot, Zap, Code, Layers, GitBranch,
  Play, Pause, RotateCcw, CheckCircle, XCircle,
  MessageSquare, Camera, Mic, FileCheck, Globe,
  ArrowRight, Upload, Scan, Send, CheckCircle2,
  AlertCircle, Info, Workflow, MousePointer,
  Sparkles, Target, TrendingDown, Award,
  Wallet, Building, FileImage, Volume2,
  Hash, Gauge, Signal, Coins, LineChart,
  TreePine, Boxes, Server, Wifi, Monitor,
  Terminal, Microscope, Radar, Satellite,
  Fingerprint, Timer, ThumbsUp, AlertOctagon,
  HardDrive, Cpu as ProcessorIcon, Package,
  DollarSign, CreditCard as CreditCardIcon,
  Banknote, Receipt, Calculator, TrendingUpIcon
} from 'lucide-react'

// Enhanced Live Processing Data with more realistic details
const liveProcessingSteps = [
  {
    id: 1,
    step: "Document Upload & Parsing",
    description: "AI memproses dokumen multi-format secara real-time",
    status: "completed",
    timestamp: "14:23:45",
    detail: "PDF, Excel, Image files (12.7MB) - OCR & NLP Processing",
    aiThoughts: [
      "🔍 Mengidentifikasi 247 halaman dokumen keuangan...",
      "📊 Ekstraksi data dari tabel dan grafik dengan computer vision...",
      "✅ Validasi format dan kualitas dokumen berhasil...",
      "🎯 Deteksi pattern finansial dengan 98.5% akurasi..."
    ],
    confidence: 98.5,
    processingTime: "1.2s"
  },
  {
    id: 2,
    step: "Multimodal AI Analysis",
    description: "Deep learning models menganalisis pola dan tren keuangan",
    status: "active",
    timestamp: "14:23:47",
    detail: "Computer Vision + NLP + Knowledge Graph Processing",
    aiThoughts: [
      "🧠 Menganalisis tren cash flow 24 bulan terakhir...",
      "📈 Mendeteksi pola pembayaran dan seasonal trends...",
      "🌐 Cross-referencing dengan 10,000+ dataset perusahaan serupa...",
      "⚡ Membangun financial risk profile dengan 127 parameter..."
    ],
    confidence: 87.3,
    processingTime: "2.8s"
  },
  {
    id: 3,
    step: "Smart Contract Validation",
    description: "Blockchain validation dengan automated rule execution",
    status: "pending",
    timestamp: "14:23:50",
    detail: "Ethereum-based smart contract dengan 247 validation rules",
    aiThoughts: [
      "⏳ Menunggu AI analysis untuk trigger smart contract...",
      "🔗 Preparing automated validation sequence...",
      "📋 Loading compliance rules dan regulatory framework..."
    ],
    confidence: 0,
    processingTime: "0.5s"
  },
  {
    id: 4,
    step: "Real-time Compliance Check",
    description: "Regulatory compliance monitoring dengan 99.9% accuracy",
    status: "pending",
    timestamp: "14:23:52",
    detail: "BI, OJK, AML regulations + International standards",
    aiThoughts: [
      "🛡️ Standby untuk compliance verification...",
      "📡 Monitoring real-time regulatory updates...",
      "📄 Preparing automated compliance report..."
    ],
    confidence: 0,
    processingTime: "1.5s"
  },
  {
    id: 5,
    step: "Automated Credit Decision",
    description: "AI-driven final decision dengan predictive modeling",
    status: "pending",
    timestamp: "14:23:55",
    detail: "Ensemble ML models + Risk scoring + Business intelligence",
    aiThoughts: [
      "🤖 Menunggu semua validasi selesai...",
      "💡 Preparing final recommendation...",
      "💰 Calculating optimal credit terms..."
    ],
    confidence: 0,
    processingTime: "0.8s"
  }
]

// Realistic application data
const applicationData = {
  applicant: "PT Teknologi Nusantara",
  amount: "Rp 2.500.000.000",
  purpose: "Working Capital & Expansion",
  documents: {
    financial_statement: { status: "processing", confidence: 87.3, size: "4.2MB" },
    bank_statement: { status: "completed", confidence: 96.8, size: "2.1MB" },
    tax_report: { status: "completed", confidence: 94.1, size: "1.8MB" },
    legal_docs: { status: "pending", confidence: 0, size: "3.5MB" },
    business_plan: { status: "processing", confidence: 45.2, size: "6.3MB" }
  },
  aiAnalysis: {
    riskScore: 82.5,
    cashFlowTrend: "positive",
    debtRatio: 0.35,
    recommendation: "APPROVE",
    industryBenchmark: 78.2,
    creditRating: "A-",
    monthlyRevenue: "1.2B",
    growthRate: 15.7
  },
  smartContractStatus: {
    deployed: true,
    validations: 247,
    gasUsed: "156,892",
    autoExecuted: true,
    contractAddress: "0x742d35Cc6534C0532925a3b8D50E5a3E6987E7A8",
    networkStatus: "Active"
  }
}

// AI Models and their analysis capabilities
const aiModels = [
  { name: "FinBERT-Large", type: "Financial NLP", status: "active", accuracy: 94.2, usage: "Document Analysis", processing: false },
  { name: "Vision Transformer", type: "Computer Vision", status: "active", accuracy: 96.8, usage: "Chart/Graph Reading", processing: false },
  { name: "XGBoost Ensemble", type: "Risk Modeling", status: "active", accuracy: 89.5, usage: "Credit Scoring", processing: false },
  { name: "LSTM Time Series", type: "Prediction", status: "active", accuracy: 92.1, usage: "Cash Flow Forecast", processing: false },
  { name: "Graph Neural Network", type: "Relationship Analysis", status: "active", accuracy: 88.7, usage: "Entity Mapping", processing: false },
  { name: "Anomaly Detection", type: "Fraud Prevention", status: "active", accuracy: 97.3, usage: "Risk Assessment", processing: false }
]

// Enhanced Smart Contract Functions for Credit Payment Automation
const smartContractFunctions = [
  { 
    name: "autoPaymentScheduler",
    gasLimit: "68000",
    status: "deployed",
    lastExecution: "1 min ago",
    executions: 342,
    description: "AI-powered automatic payment scheduling with risk assessment",
    tooltip: "Mengotomatisasi jadwal pembayaran berdasarkan analisis cash flow AI dan prediksi kemampuan bayar nasabah",
    inputs: ["loanAmount", "paymentCapacity", "riskProfile", "marketConditions"],
    outputs: ["paymentSchedule", "interestRate", "flexibilityTerms"],
    creditFeatures: ["Dynamic interest rates", "Cash flow analysis", "Payment flexibility", "Early payment incentives"]
  },
  { 
    name: "smartDisbursement", 
    gasLimit: "89000",
    status: "deployed",
    lastExecution: "3 min ago",
    executions: 156,
    description: "Intelligent credit disbursement with milestone-based releases",
    tooltip: "Mencairkan kredit secara bertahap berdasarkan milestone bisnis dan performa pembayaran real-time",
    inputs: ["milestoneData", "businessMetrics", "collateralStatus"],
    outputs: ["disbursementAmount", "nextMilestone", "riskAdjustment"],
    creditFeatures: ["Milestone tracking", "Performance-based release", "Risk adjustment", "Collateral monitoring"]
  },
  { 
    name: "dynamicInterestCalculator",
    gasLimit: "75000",
    status: "deployed",
    lastExecution: "2 min ago",
    executions: 298,
    description: "AI-driven dynamic interest rate calculation based on market and borrower data",
    tooltip: "Menghitung suku bunga secara dinamis berdasarkan kondisi pasar, profil risiko, dan performa pembayaran",
    inputs: ["marketRates", "creditScore", "paymentHistory", "economicIndicators"],
    outputs: ["adjustedRate", "rateJustification", "nextReviewDate"],
    creditFeatures: ["Market-responsive rates", "Personalized pricing", "Performance rewards", "Transparent calculation"]
  },
  { 
    name: "collateralManagement",
    gasLimit: "156000",
    status: "deployed",
    lastExecution: "5 min ago",
    executions: 89,
    description: "Digital collateral management with real-time valuation and monitoring",
    tooltip: "Mengelola jaminan digital dengan penilaian real-time dan monitoring otomatis terhadap nilai dan status",
    inputs: ["collateralData", "marketValuation", "legalStatus"],
    outputs: ["currentValue", "riskAssessment", "actionRequired"],
    creditFeatures: ["Real-time valuation", "Digital certificates", "Automatic alerts", "Legal compliance"]
  },
  { 
    name: "paymentProcessing",
    gasLimit: "45000",
    status: "deployed",
    lastExecution: "30 sec ago",
    executions: 567,
    description: "Automated payment processing with instant settlement and reconciliation",
    tooltip: "Memproses pembayaran secara otomatis dengan settlement instan dan rekonsiliasi real-time",
    inputs: ["paymentData", "accountDetails", "transactionType"],
    outputs: ["transactionHash", "settlementStatus", "feeCalculation"],
    creditFeatures: ["Instant processing", "Multi-channel support", "Fee optimization", "Fraud detection"]
  }
]

// Enhanced AI Report Sections with detailed analysis
const aiReportSections = [
  {
    title: "Analisis Kemampuan Bayar",
    tooltip: "Evaluasi komprehensif kemampuan finansial pemohon kredit menggunakan machine learning untuk memprediksi probabilitas pembayaran sukses",
    items: [
      { label: "Debt Service Ratio", value: "32%", trend: "positive", detail: "Rasio pembayaran utang terhadap pendapatan, menunjukkan kemampuan membayar yang sehat" },
      { label: "Free Cash Flow", value: "Rp 450jt/bulan", trend: "positive", detail: "Arus kas bebas bulanan setelah operational expenses" },
      { label: "Working Capital", value: "Rp 2.8M", trend: "neutral", detail: "Modal kerja yang tersedia untuk operasional harian" }
    ]
  },
  {
    title: "Prediksi Kinerja Bisnis",
    tooltip: "Proyeksi performa bisnis berdasarkan data historis, tren pasar, dan analisis prediktif AI untuk menilai sustainability bisnis",
    items: [
      { label: "Revenue Growth", value: "+15.7%", trend: "positive", detail: "Pertumbuhan pendapatan year-over-year yang konsisten" },
      { label: "Market Share", value: "12.3%", trend: "positive", detail: "Pangsa pasar dalam industri teknologi Indonesia" },
      { label: "Industry Position", value: "Top 20%", trend: "positive", detail: "Posisi dalam industri berdasarkan multiple metrics" }
    ]
  },
  {
    title: "Risk Assessment",
    tooltip: "Penilaian risiko komprehensif menggunakan ensemble AI models untuk analisis 360 derajat terhadap profil risiko pemohon",
    items: [
      { label: "Credit Score", value: "742", trend: "positive", detail: "Skor kredit berdasarkan algoritma proprietary" },
      { label: "Default Probability", value: "0.7%", trend: "positive", detail: "Probabilitas gagal bayar dalam 12 bulan ke depan" },
      { label: "Market Risk", value: "Medium", trend: "neutral", detail: "Exposure terhadap volatilitas pasar dan kondisi ekonomi" }
    ]
  }
]

// Enhanced compliance rules with Indonesian regulations
const complianceRules = [
  { 
    rule: "Bank Indonesia (BI) Regulation",
    result: "compliant",
    score: 98.5,
    status: "monitoring",
    lastCheck: "2 min ago",
    details: "POJK compliance, capital adequacy, risk management"
  },
  { 
    rule: "Financial Services Authority (OJK)",
    result: "compliant", 
    score: 97.2,
    status: "monitoring",
    lastCheck: "3 min ago",
    details: "Consumer protection, fair lending practices"
  },
  { 
    rule: "Anti Money Laundering (AML)",
    result: "verified",
    score: 99.1,
    status: "monitoring", 
    lastCheck: "1 min ago",
    details: "KYC verification, transaction monitoring"
  },
  { 
    rule: "Basel III Requirements",
    result: "compliant",
    score: 95.8,
    status: "monitoring",
    lastCheck: "5 min ago",
    details: "Capital adequacy ratio, liquidity coverage"
  },
  { 
    rule: "Data Protection (GDPR/UU PDP)",
    result: "compliant",
    score: 96.4,
    status: "monitoring",
    lastCheck: "4 min ago",
    details: "Privacy protection, data security compliance"
  }
]

// Enhanced Live Credit Analytics Dashboard
const creditAnalytics = {
  portfolio: {
    totalLoans: "Rp 45.7T",
    activeAccounts: "12,847",
    averageTicket: "Rp 3.6M",
    portfolioGrowth: "+23.4%"
  },
  performance: {
    approvalRate: "89.3%",
    processingTime: "142 sec",
    defaultRate: "0.8%", 
    customerSatisfaction: "96.2%"
  },
  riskMetrics: {
    portfolioRisk: "Low",
    concentrationRisk: "4.2%",
    earlyWarningAlerts: 3,
    riskAdjustedReturn: "18.7%"
  }
}

// Sample contract activities for credit operations
const sampleContractActivities = [
  {
    timestamp: "14:32:45",
    action: "Automated loan disbursement - Stage 2",
    hash: "0x742d35Cc...E7A8",
    gas: 68000,
    status: 'success',
    function: "smartDisbursement",
    amount: "Rp 850M",
    borrower: "PT Teknologi Digital"
  },
  {
    timestamp: "14:30:12", 
    action: "Dynamic interest rate adjustment",
    hash: "0x8f3e42Ab...D2F1",
    gas: 75000,
    status: 'success',
    function: "dynamicInterestCalculator",
    amount: "12.3% → 11.8%",
    borrower: "CV Mandiri Sejahtera"
  },
  {
    timestamp: "14:28:55",
    action: "Payment processing - Monthly installment",
    hash: "0x1a7c89Ef...B3C4",
    gas: 45000,
    status: 'success',
    function: "paymentProcessing",
    amount: "Rp 125M",
    borrower: "PT Nusantara Industries"
  },
  {
    timestamp: "14:27:33",
    action: "Collateral revaluation - Real estate",
    hash: "0x9c4f67Bd...A5E2",
    gas: 156000,
    status: 'success', 
    function: "collateralManagement",
    amount: "Rp 4.2B",
    borrower: "PT Teknologi Nusantara"
  }
]

// Tooltip component with enhanced styling
const Tooltip = ({ text, children, position = "top" }) => (
  <div className="group relative inline-block">
    {children}
    <div className={`invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 absolute z-50 ${
      position === "top" ? "bottom-full mb-2" : "top-full mt-2"
    } left-1/2 transform -translate-x-1/2 px-4 py-3 bg-gray-900/95 backdrop-blur-sm text-white text-sm rounded-lg w-80 shadow-2xl border border-gray-700`}>
      {text}
      <div className={`absolute ${
        position === "top" ? "bottom-0 translate-y-1/2" : "top-0 -translate-y-1/2"
      } left-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900 border-r border-b border-gray-700`}></div>
    </div>
  </div>
)

// Contract Execution Flow Steps
const contractExecutionSteps = [
  { 
    step: 1, 
    name: "Validate Input", 
    description: "Verifying payment parameters", 
    status: "pending" 
  },
  { 
    step: 2, 
    name: "Process Payment", 
    description: "Processing credit disbursement", 
    status: "pending" 
  },
  { 
    step: 3, 
    name: "Update State", 
    description: "Updating payment records", 
    status: "pending" 
  },
  { 
    step: 4, 
    name: "Emit Events", 
    description: "Broadcasting payment status", 
    status: "pending" 
  },
  { 
    step: 5, 
    name: "Verify Success", 
    description: "Confirming transaction success", 
    status: "pending" 
  },
  { 
    step: 6, 
    name: "Generate Receipt", 
    description: "Creating payment receipt", 
    status: "pending" 
  }
]

function App() {
  const [activeMenu, setActiveMenu] = useState('processing-flow')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [currentStep, setCurrentStep] = useState(1)
  const [processingProgress, setProcessingProgress] = useState(0)
  const [aiConfidence, setAiConfidence] = useState(98.5)
  const [isProcessing, setIsProcessing] = useState(false)
  const [thoughtIndex, setThoughtIndex] = useState(0)
  const [typingEffect, setTypingEffect] = useState("")
  const [documentAnalysis, setDocumentAnalysis] = useState([])
  const [smartContractLogs, setSmartContractLogs] = useState([])
  const [complianceChecks, setComplianceChecks] = useState([])
  const [finalDecision, setFinalDecision] = useState(null)
  
  // New states for enhanced features
  const [aiModelStats, setAiModelStats] = useState(aiModels)
  const [contractTransactions, setContractTransactions] = useState([])
  const [networkStats, setNetworkStats] = useState({ tps: 847, gasPrice: 23, blockHeight: 18234567 })
  const [realTimeAnalysis, setRealTimeAnalysis] = useState("")
  const [aiInsights, setAiInsights] = useState([])
  const [contractActivity, setContractActivity] = useState([])
  const [complianceActivity, setComplianceActivity] = useState([])
  
  // Smart Contract specific states
  const [contractExecutionFlow, setContractExecutionFlow] = useState(contractExecutionSteps)
  const [currentContractStep, setCurrentContractStep] = useState(0)
  const [contractProgress, setContractProgress] = useState(0)
  const [isContractExecuting, setIsContractExecuting] = useState(false)
  const [blockchainVisualization, setBlockchainVisualization] = useState([])
  const [gasOptimization, setGasOptimization] = useState({ current: 0, optimized: 0, savings: 0 })
  
  // Enhanced typing effect for AI thoughts with emojis
  useEffect(() => {
    if (currentStep <= liveProcessingSteps.length && liveProcessingSteps[currentStep - 1]?.aiThoughts) {
      const thoughts = liveProcessingSteps[currentStep - 1].aiThoughts
      const currentThoughtText = thoughts[thoughtIndex] || ""
      
      let charIndex = 0
      setTypingEffect("")
      
      const typeInterval = setInterval(() => {
        if (charIndex <= currentThoughtText.length) {
          setTypingEffect(currentThoughtText.slice(0, charIndex))
          charIndex++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => {
            setThoughtIndex(prev => (prev + 1) % thoughts.length)
          }, 2500)
        }
      }, 60)
      
      return () => clearInterval(typeInterval)
    }
  }, [currentStep, thoughtIndex])

  // Smart Contract Execution Simulation
  useEffect(() => {
    if (activeMenu === 'smart-contracts') {
      const interval = setInterval(() => {
        // Simulate contract execution flow
        if (!isContractExecuting && Math.random() > 0.7) {
          setIsContractExecuting(true)
          setCurrentContractStep(0)
          setContractProgress(0)
          
          // Reset execution flow
          setContractExecutionFlow(prev => prev.map((step, index) => ({
            ...step,
            status: index === 0 ? 'active' : 'pending'
          })))
        }
        
        if (isContractExecuting) {
          setContractProgress(prev => {
            const newProgress = Math.min(prev + Math.random() * 15, 100)
            
            if (newProgress >= 100) {
              setContractExecutionFlow(prev => prev.map((step, index) => {
                if (index <= currentContractStep) {
                  return { ...step, status: 'completed' }
                } else if (index === currentContractStep + 1) {
                  return { ...step, status: 'active' }
                }
                return step
              }))
              
              if (currentContractStep < contractExecutionSteps.length - 1) {
                setCurrentContractStep(prev => prev + 1)
                setContractProgress(0)
                return
              } else {
                setIsContractExecuting(false)
                setCurrentContractStep(0)
                
                // Add completed transaction
                const newTransaction = {
                  timestamp: new Date().toLocaleTimeString(),
                  action: "Smart contract execution completed",
                  hash: `0x${Math.random().toString(16).substr(2, 8)}...${Math.random().toString(16).substr(2, 4)}`,
                  gas: Math.floor(Math.random() * 50000) + 20000,
                  status: 'success',
                  function: smartContractFunctions[Math.floor(Math.random() * smartContractFunctions.length)].name,
                  amount: `Rp ${Math.floor(Math.random() * 900 + 100)}M`,
                  borrower: `PT ${['Teknologi', 'Digital', 'Nusantara', 'Mandiri'][Math.floor(Math.random() * 4)]} ${['Sejahtera', 'Industries', 'Group', 'Corp'][Math.floor(Math.random() * 4)]}`
                }
                
                setContractActivity(prev => {
                  const newActivity = [...prev, newTransaction]
                  return newActivity.slice(-10)
                })
                
                // Update gas optimization
                setGasOptimization(prev => ({
                  current: prev.current + newTransaction.gas,
                  optimized: prev.optimized + Math.floor(newTransaction.gas * 0.75),
                  savings: prev.savings + Math.floor(newTransaction.gas * 0.25)
                }))
                
                return
              }
            }
            
            return newProgress
          })
        }
      }, 500)
      
      return () => clearInterval(interval)
    }
  }, [activeMenu, isContractExecuting, currentContractStep])

  // Blockchain Visualization
  useEffect(() => {
    if (activeMenu === 'smart-contracts') {
      const interval = setInterval(() => {
        const newBlock = {
          id: Math.random().toString(16).substr(2, 8),
          transactions: Math.floor(Math.random() * 20) + 5,
          timestamp: new Date().toLocaleTimeString(),
          hash: `0x${Math.random().toString(16).substr(2, 12)}`,
          gasUsed: Math.floor(Math.random() * 100000) + 50000
        }
        
        setBlockchainVisualization(prev => {
          const newBlocks = [...prev, newBlock]
          return newBlocks.slice(-5) // Keep only last 5 blocks
        })
      }, 8000)
      
      return () => clearInterval(interval)
    }
  }, [activeMenu])

  // Real-time AI Analysis Simulation for AI Engine
  useEffect(() => {
    const analysisMessages = [
      "🔄 Analyzing cash flow patterns with deep learning...",
      "📊 Calculating debt-to-income ratio using ensemble models...",
      "🎯 Evaluating business performance with 127 parameters...",
      "💡 Cross-referencing with 10,000+ industry benchmarks...",
      "🔍 Detecting financial anomalies with 97.3% accuracy...",
      "📈 Predicting future payment behavior using LSTM...",
      "⚡ Optimizing credit terms with multi-objective algorithms..."
    ]
    
    const interval = setInterval(() => {
      if (activeMenu === 'ai-engine') {
        const randomMessage = analysisMessages[Math.floor(Math.random() * analysisMessages.length)]
        setRealTimeAnalysis(randomMessage)
        
        // Add to AI insights
        setAiInsights(prev => {
          const newInsights = [...prev, {
            timestamp: new Date().toLocaleTimeString(),
            message: randomMessage,
            confidence: Math.floor(Math.random() * 15) + 85,
            model: aiModels[Math.floor(Math.random() * aiModels.length)].name
          }]
          return newInsights.slice(-8) // Keep only last 8
        })
        
        // Simulate model processing
        setAiModelStats(prev => prev.map(model => ({
          ...model,
          processing: Math.random() > 0.7,
          accuracy: Math.max(85, Math.min(99, model.accuracy + (Math.random() - 0.5) * 1))
        })))
      }
    }, 3000)
    
    return () => clearInterval(interval)
  }, [activeMenu])

  // Compliance Monitoring Simulation
  useEffect(() => {
    const complianceActions = [
      "Bank Indonesia regulation verified with 98.5% confidence",
      "OJK compliance check completed - all standards met",
      "AML monitoring updated - clean transaction history",
      "Basel III requirements validated - capital adequacy confirmed",
      "GDPR privacy audit passed - data protection compliant",
      "Real-time regulatory update processed automatically",
      "Cross-border compliance check initiated",
      "Risk assessment updated based on new market data"
    ]
    
    const interval = setInterval(() => {
      if (activeMenu === 'compliance') {
        setComplianceActivity(prev => {
          const newActivity = [...prev, {
            timestamp: new Date().toLocaleTimeString(),
            action: complianceActions[Math.floor(Math.random() * complianceActions.length)],
            status: 'verified',
            score: Math.floor(Math.random() * 5) + 95
          }]
          return newActivity.slice(-8) // Keep only last 8
        })
      }
    }, 5000)
    
    return () => clearInterval(interval)
  }, [activeMenu])

  // Network Stats Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setNetworkStats(prev => ({
        tps: Math.floor(Math.random() * 100) + 800,
        gasPrice: Math.floor(Math.random() * 10) + 20,
        blockHeight: prev.blockHeight + Math.floor(Math.random() * 3) + 1
      }))
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  // Enhanced processing simulation with realistic AI behavior
  useEffect(() => {
    if (!isProcessing) return

    const interval = setInterval(() => {
      if (currentStep === 1) {
        if (processingProgress < 100) {
          setProcessingProgress(prev => Math.min(prev + Math.random() * 8, 100))
          
          // Simulate AI model activations
          if (processingProgress > 30 && aiModelStats[0].status !== "processing") {
            setAiModelStats(prev => prev.map((model, idx) => 
              idx < 2 ? {...model, status: "processing"} : model
            ))
          }
        } else {
          setTimeout(() => {
            setCurrentStep(2)
            setProcessingProgress(0)
            setAiConfidence(87.3)
            setAiModelStats(prev => prev.map(model => ({...model, status: "active"})))
          }, 1000)
        }
      }
      
      if (currentStep === 2) {
        if (processingProgress < 100) {
          setProcessingProgress(prev => Math.min(prev + Math.random() * 3, 100))
          setAiConfidence(prev => Math.min(prev + Math.random() * 2, 96.8))
          
          if (processingProgress > 20 && documentAnalysis.length === 0) {
            setDocumentAnalysis([
              { type: "Cash Flow Analysis", status: "analyzing", result: "Positive trend detected", confidence: 89.2, details: "24-month upward trajectory" },
              { type: "Debt Ratio Calculation", status: "analyzing", result: "Within acceptable range", confidence: 92.1, details: "35% debt-to-equity ratio" },
              { type: "Revenue Growth", status: "analyzing", result: "15.7% YoY growth", confidence: 87.5, details: "Consistent quarterly growth" },
              { type: "Industry Comparison", status: "analyzing", result: "Above average performance", confidence: 94.3, details: "Top 20% in sector" },
              { type: "Risk Assessment", status: "analyzing", result: "Low-medium risk profile", confidence: 88.9, details: "Score: 82.5/100" }
            ])
          }
          
          if (processingProgress > 60) {
            setDocumentAnalysis(prev => prev.map(item => ({...item, status: "completed"})))
          }
          
        } else {
          setTimeout(() => {
            setCurrentStep(3)
            setProcessingProgress(0)
          }, 1500)
        }
      }
      
      if (currentStep === 3) {
        if (processingProgress < 100) {
          setProcessingProgress(prev => Math.min(prev + Math.random() * 12, 100))
          
          if (processingProgress > 20 && smartContractLogs.length === 0) {
            setSmartContractLogs([
              { action: "Contract Deployed", hash: "0x742d35Cc...E7A8", gas: "21,000", status: "success", function: "validateCreditScore" },
              { action: "AI Data Validation", hash: "0x8f3e42Ab...D2F1", gas: "45,200", status: "success", function: "executeComplianceCheck" },
              { action: "Risk Score Calculation", hash: "0x1a7c89Ef...B3C4", gas: "67,100", status: "pending", function: "calculateRiskParameters" },
              { action: "Parameter Optimization", hash: "0x9c4f67Bd...A5E2", gas: "89,300", status: "pending", function: "autoApprovalTrigger" }
            ])
            setContractTransactions(prev => [...prev, ...smartContractLogs])
          }
          
          if (processingProgress > 70) {
            setSmartContractLogs(prev => prev.map(log => ({...log, status: "success"})))
          }
        } else {
          setTimeout(() => {
            setCurrentStep(4)
            setProcessingProgress(0)
          }, 1000)
        }
      }
      
      if (currentStep === 4) {
        if (processingProgress < 100) {
          setProcessingProgress(prev => Math.min(prev + Math.random() * 15, 100))
          
          if (processingProgress > 25 && complianceChecks.length === 0) {
            setComplianceChecks([
              { regulation: "Bank Indonesia (BI)", status: "checking", result: "Compliant", score: 98.5, details: "All POJK requirements met" },
              { regulation: "OJK Financial Services", status: "checking", result: "Compliant", score: 97.2, details: "Risk assessment passed" },
              { regulation: "Anti Money Laundering", status: "checking", result: "Verified", score: 99.1, details: "Clean transaction history" },
              { regulation: "Basel III Requirements", status: "checking", result: "Compliant", score: 95.8, details: "Capital adequacy confirmed" },
              { regulation: "GDPR Data Protection", status: "checking", result: "Compliant", score: 96.4, details: "Privacy standards met" }
            ])
          }
          
          if (processingProgress > 75) {
            setComplianceChecks(prev => prev.map(check => ({...check, status: "completed"})))
          }
        } else {
          setTimeout(() => {
            setCurrentStep(5)
            setProcessingProgress(0)
          }, 1200)
        }
      }
      
      if (currentStep === 5) {
        if (processingProgress < 100) {
          setProcessingProgress(prev => Math.min(prev + Math.random() * 20, 100))
        } else {
          setTimeout(() => {
            setFinalDecision({
              decision: "APPROVED",
              amount: "Rp 2.500.000.000",
              confidence: 96.8,
              terms: "36 months, 12.5% APR",
              riskScore: 82.5,
              processingTime: "142 seconds",
              conditions: ["Monthly income verification", "Quarterly business review", "Insurance requirement"]
            })
            setIsProcessing(false)
          }, 2000)
        }
      }
    }, 300)
    
    return () => clearInterval(interval)
  }, [currentStep, processingProgress, isProcessing])

  const startProcessing = () => {
    setIsProcessing(true)
    setCurrentStep(1)
    setProcessingProgress(0)
    setAiConfidence(98.5)
    setDocumentAnalysis([])
    setSmartContractLogs([])
    setComplianceChecks([])
    setFinalDecision(null)
    setContractTransactions([])
  }

  const resetDemo = () => {
    setIsProcessing(false)
    setCurrentStep(1)
    setProcessingProgress(0)
    setAiConfidence(98.5)
    setDocumentAnalysis([])
    setSmartContractLogs([])
    setComplianceChecks([])
    setFinalDecision(null)
    setThoughtIndex(0)
    setContractTransactions([])
    setAiModelStats(aiModels)
  }

  const startContractDemo = () => {
    setIsContractExecuting(true)
    setCurrentContractStep(0)
    setContractProgress(0)
    setContractExecutionFlow(contractExecutionSteps.map((step, index) => ({
      ...step,
      status: index === 0 ? 'active' : 'pending'
    })))
  }

  // AI Report Analysis Component
  const renderAIReport = () => (
    <div className="bg-gradient-to-br from-[#1B2C6B]/40 to-[#0A0F2D]/40 rounded-2xl p-8 border border-[#2CD5C4]/30 shadow-xl">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-4 rounded-xl bg-[#2CD5C4]/20 text-[#2CD5C4] shadow-lg shadow-[#2CD5C4]/30">
          <FileText size={32} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">AI Generated Report Analysis</h3>
          <p className="text-sm text-gray-400">Comprehensive credit assessment with ML insights</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {aiReportSections.map((section, index) => (
          <div key={index} className="p-4 bg-[#1A1F3C]/50 rounded-xl border border-[#2CD5C4]/30">
            <Tooltip text={section.tooltip}>
              <h4 className="text-white font-bold mb-4 flex items-center gap-2 cursor-help">
                {section.title}
                <Info size={14} className="text-gray-400 hover:text-[#2CD5C4] transition-colors" />
              </h4>
            </Tooltip>
            <div className="space-y-3">
              {section.items.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center">
                    <Tooltip text={item.detail} position="bottom">
                      <span className="text-sm text-gray-300 cursor-help hover:text-white transition-colors">{item.label}</span>
                    </Tooltip>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium ${
                        item.trend === 'positive' ? 'text-green-400' :
                        item.trend === 'negative' ? 'text-red-400' :
                        'text-yellow-400'
                      }`}>
                        {item.value}
                      </span>
                      {item.trend === 'positive' ? <TrendingUp size={14} className="text-green-400" /> :
                       item.trend === 'negative' ? <TrendingDown size={14} className="text-red-400" /> :
                       <ArrowRight size={14} className="text-yellow-400" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  // Live Credit Analytics Dashboard
  const renderCreditAnalytics = () => (
    <div className="bg-gradient-to-br from-[#1B2C6B]/40 to-[#0A0F2D]/40 rounded-2xl p-8 border border-green-400/30 shadow-xl">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-4 rounded-xl bg-green-400/20 text-green-400 shadow-lg shadow-green-400/30">
          <BarChart2 size={32} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Live Credit Portfolio Analytics</h3>
          <p className="text-sm text-gray-400">Real-time performance metrics and insights</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-6">
        {/* Portfolio Metrics */}
        <div className="text-center p-4 bg-[#1A1F3C]/50 rounded-xl border border-green-400/30">
          <Tooltip text="Total outstanding loan portfolio across all active accounts">
            <div className="text-2xl font-bold text-green-400 mb-1 cursor-help">{creditAnalytics.portfolio.totalLoans}</div>
          </Tooltip>
          <div className="text-sm text-gray-400">Total Portfolio</div>
        </div>
        
        <div className="text-center p-4 bg-[#1A1F3C]/50 rounded-xl border border-[#2CD5C4]/30">
          <Tooltip text="Number of active loan accounts currently being serviced">
            <div className="text-2xl font-bold text-[#2CD5C4] mb-1 cursor-help">{creditAnalytics.portfolio.activeAccounts}</div>
          </Tooltip>
          <div className="text-sm text-gray-400">Active Accounts</div>
        </div>
        
        <div className="text-center p-4 bg-[#1A1F3C]/50 rounded-xl border border-yellow-400/30">
          <Tooltip text="Average loan amount per approved application">
            <div className="text-2xl font-bold text-yellow-400 mb-1 cursor-help">{creditAnalytics.portfolio.averageTicket}</div>
          </Tooltip>
          <div className="text-sm text-gray-400">Average Ticket</div>
        </div>
        
        <div className="text-center p-4 bg-[#1A1F3C]/50 rounded-xl border border-purple-400/30">
          <Tooltip text="Year-over-year portfolio growth rate">
            <div className="text-2xl font-bold text-purple-400 mb-1 cursor-help">{creditAnalytics.portfolio.portfolioGrowth}</div>
          </Tooltip>
          <div className="text-sm text-gray-400">Portfolio Growth</div>
        </div>
      </div>

      {/* Performance and Risk Grid */}
      <div className="grid grid-cols-2 gap-6">
        <div className="p-4 bg-[#1A1F3C]/30 rounded-xl border border-[#2CD5C4]/30">
          <h4 className="text-lg font-bold text-white mb-4">Performance Metrics</h4>
          <div className="space-y-3">
            {Object.entries(creditAnalytics.performance).map(([key, value], index) => (
              <div key={key} className="flex justify-between items-center">
                <Tooltip text={`Real-time ${key.replace(/([A-Z])/g, ' $1').toLowerCase()} measurement`}>
                  <span className="text-sm text-gray-300 cursor-help capitalize">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </span>
                </Tooltip>
                <span className="text-sm font-bold text-[#2CD5C4]">{value}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-4 bg-[#1A1F3C]/30 rounded-xl border border-purple-400/30">
          <h4 className="text-lg font-bold text-white mb-4">Risk Metrics</h4>
          <div className="space-y-3">
            {Object.entries(creditAnalytics.riskMetrics).map(([key, value], index) => (
              <div key={key} className="flex justify-between items-center">
                <Tooltip text={`Current ${key.replace(/([A-Z])/g, ' $1').toLowerCase()} assessment`}>
                  <span className="text-sm text-gray-300 cursor-help capitalize">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </span>
                </Tooltip>
                <span className={`text-sm font-bold ${
                  key === 'portfolioRisk' && value === 'Low' ? 'text-green-400' :
                  key === 'earlyWarningAlerts' ? 'text-yellow-400' :
                  'text-purple-400'
                }`}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  // Initialize contract activities
  useEffect(() => {
    if (activeMenu === 'smart-contracts') {
      setContractActivity(sampleContractActivities)
    }
  }, [activeMenu])

  // Enhanced Sidebar
  const SidebarItem = ({ icon, text, active, collapsed, onClick, badge, description }) => (
    <button
      className={`flex items-center w-full px-4 py-3 rounded-xl transition-all duration-300 group ${
        active 
          ? 'bg-gradient-to-r from-[#2CD5C4]/30 to-[#4C6FFF]/30 text-white shadow-md shadow-[#2CD5C4]/20' 
          : 'text-gray-400 hover:bg-[#2CD5C4]/10 hover:text-[#2CD5C4]'
      }`}
      onClick={onClick}
    >
      <div className={`flex items-center justify-center ${collapsed ? 'w-full' : 'w-10'}`}>
        {icon}
      </div>
      {!collapsed && (
        <div className="flex-1 ml-4 text-left">
          <div className="flex items-center justify-between">
            <span className="font-medium text-sm">{text}</span>
            {badge && (
              <span className={`ml-2 px-2 py-0.5 text-xs rounded-full font-bold ${
                active ? 'bg-white text-[#2CD5C4]' : 'bg-[#2CD5C4]/20 text-[#2CD5C4] group-hover:bg-[#2CD5C4] group-hover:text-white'
              }`}>
                {badge}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 group-hover:text-gray-300">{description}</p>
        </div>
      )}
    </button>
  )

  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-[#0A0F2D] via-[#1A1F3C] to-[#2CD5C4]/10">
      <div className={`bg-gradient-to-b from-[#1B2C6B]/95 to-[#0A0F2D]/95 backdrop-blur-xl fixed h-full transition-all duration-500 z-30 border-r border-[#2CD5C4]/30 shadow-2xl ${sidebarOpen ? 'w-80' : 'w-20'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-8 border-b border-[#2CD5C4]/40">
            {sidebarOpen ? (
              <div>
                <div className="text-[#2CD5C4] font-bold text-2xl tracking-wide">Sucofindo</div>
                <div className="text-xs text-gray-300 mt-1">Hyperautomated Credit Intelligence</div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400">AI Systems Online</span>
                </div>
              </div>
            ) : (
              <div className="text-[#2CD5C4] font-bold text-2xl mx-auto">S</div>
            )}
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)} 
              className="text-gray-400 hover:text-[#2CD5C4] p-2 rounded-lg hover:bg-[#2CD5C4]/20 transition-all duration-300"
            >
              <Menu size={20} />
            </button>
          </div>
          
          <div className="py-6 flex-grow">
            <nav className="px-3 space-y-2">
              <SidebarItem 
                icon={<Workflow size={20} />} 
                text="Hyperautomated Intelligence" 
                active={activeMenu === 'processing-flow'} 
                collapsed={!sidebarOpen}
                onClick={() => setActiveMenu('processing-flow')}
                badge="LIVE"
                description="Real-time credit processing"
              />
              <SidebarItem 
                icon={<Brain size={20} />} 
                text="Multimodal AI Engine" 
                active={activeMenu === 'ai-engine'} 
                collapsed={!sidebarOpen}
                onClick={() => setActiveMenu('ai-engine')}
                badge="AI"
                description="Advanced ML models"
              />
              <SidebarItem 
                icon={<Code size={20} />} 
                text="Smart Contract Hub" 
                active={activeMenu === 'smart-contracts'} 
                collapsed={!sidebarOpen}
                onClick={() => setActiveMenu('smart-contracts')}
                badge="AUTO"
                description="Blockchain automation"
              />
              <SidebarItem 
                icon={<Shield size={20} />} 
                text="Compliance Monitor" 
                active={activeMenu === 'compliance'} 
                collapsed={!sidebarOpen}
                onClick={() => setActiveMenu('compliance')}
                badge="24/7"
                description="Regulatory compliance"
              />
            </nav>
            
            {/* Enhanced Quick Stats */}
            {sidebarOpen && (
              <div className="mx-3 mt-8 p-4 bg-gradient-to-r from-[#2CD5C4]/10 to-[#4C6FFF]/10 rounded-xl border border-[#2CD5C4]/30">
                <div className="text-sm font-medium text-white mb-3">System Status</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">AI Models</span>
                    <span className="text-green-400">{aiModelStats.filter(m => m.status === 'active').length}/6 Active</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Processing</span>
                    <span className="text-[#2CD5C4]">{Math.round(processingProgress)}%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Contracts</span>
                    <span className="text-yellow-400">{smartContractFunctions.filter(f => f.status === 'deployed').length} Active</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Network TPS</span>
                    <span className="text-purple-400">{networkStats.tps}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-500 ${sidebarOpen ? 'ml-80' : 'ml-20'}`}>
        {/* Enhanced Header */}
        <header className="bg-gradient-to-r from-[#1B2C6B]/90 to-[#0A0F2D]/90 backdrop-blur-xl px-8 py-6 border-b border-[#2CD5C4]/40 sticky top-0 z-20 shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#2CD5C4] via-white to-[#4C6FFF] bg-clip-text text-transparent">
                {activeMenu === 'processing-flow' && 'Hyperautomated Processing Hub'}
                {activeMenu === 'ai-engine' && 'Multimodal AI Intelligence Center'}
                {activeMenu === 'smart-contracts' && 'Smart Contract Automation Hub'}
                {activeMenu === 'compliance' && 'Real-Time Compliance Monitoring'}
              </h1>
              <div className="flex items-center gap-6 mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400 font-medium">{applicationData.applicant}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#2CD5C4] rounded-full animate-pulse"></div>
                  <span className="text-sm text-[#2CD5C4]">
                    {activeMenu === 'processing-flow' ? `Step ${currentStep}/5` : 
                     activeMenu === 'smart-contracts' ? (isContractExecuting ? `Contract Step ${currentContractStep + 1}/6` : 'Ready') :
                     'Real-time Active'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-yellow-400" />
                  <span className="text-sm text-yellow-400">
                    {activeMenu === 'smart-contracts' ? `Gas: ${networkStats.gasPrice} Gwei` : `AI Confidence ${aiConfidence.toFixed(1)}%`}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Control Buttons */}
              <div className="flex gap-2">
                {activeMenu === 'processing-flow' && (
                  <>
                    <button
                      onClick={startProcessing}
                      disabled={isProcessing}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2CD5C4] to-[#4C6FFF] text-white rounded-lg hover:shadow-lg hover:shadow-[#2CD5C4]/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Play size={16} />
                      {isProcessing ? 'Processing...' : 'Start Demo'}
                    </button>
                    <button
                      onClick={resetDemo}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <RotateCcw size={16} />
                      Reset
                    </button>
                  </>
                )}
                {activeMenu === 'smart-contracts' && (
                  <button
                    onClick={startContractDemo}
                    disabled={isContractExecuting}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Code size={16} />
                    {isContractExecuting ? 'Executing...' : 'Execute Contract'}
                  </button>
                )}
              </div>
              
              {/* Status Cards */}
              <div className="flex gap-3">
                <div className="bg-gradient-to-r from-[#1A1F3C]/80 to-[#0A0F2D]/80 rounded-lg px-4 py-3 border border-[#2CD5C4]/30 backdrop-blur-sm">
                  <div className="text-xs text-gray-400">
                    {activeMenu === 'processing-flow' ? 'Processing' : 
                     activeMenu === 'ai-engine' ? 'AI Models' :
                     activeMenu === 'smart-contracts' ? 'Contracts' : 'Compliance'}
                  </div>
                  <div className="text-lg font-bold text-[#2CD5C4]">
                    {activeMenu === 'processing-flow' ? `${Math.round(processingProgress)}%` :
                     activeMenu === 'ai-engine' ? `${aiModelStats.filter(m => m.status === 'active').length}/6` :
                     activeMenu === 'smart-contracts' ? `${smartContractFunctions.filter(f => f.status === 'deployed').length}/5` :
                     `${complianceRules.filter(r => r.result === 'compliant').length}/5`}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#1A1F3C]/80 to-[#0A0F2D]/80 rounded-lg px-4 py-3 border border-green-400/30 backdrop-blur-sm">
                  <div className="text-xs text-gray-400">Performance</div>
                  <div className="text-lg font-bold text-green-400">
                    {activeMenu === 'ai-engine' ? `${(aiModelStats.reduce((acc, m) => acc + m.accuracy, 0) / aiModelStats.length).toFixed(1)}%` :
                     activeMenu === 'smart-contracts' ? `${networkStats.tps} TPS` :
                     activeMenu === 'compliance' ? '99.9%' : 
                     `${aiConfidence.toFixed(1)}%`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-8 overflow-auto h-[calc(100vh-140px)]">
          {/* PROCESSING FLOW PAGE */}
          {activeMenu === 'processing-flow' && (
            <div className="space-y-8">
              {/* Application Overview */}
              <div className="bg-gradient-to-br from-[#1B2C6B]/50 to-[#0A0F2D]/50 rounded-2xl p-8 border border-[#2CD5C4]/30 shadow-2xl">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-3">Real-Time Credit Processing</h2>
                    <p className="text-gray-300 max-w-2xl">Menggunakan teknologi AI terdepan untuk memproses aplikasi kredit dengan akurasi tinggi dan kecepatan maksimal</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-[#2CD5C4] mb-2">{applicationData.amount}</div>
                    <div className="text-lg text-white font-medium">{applicationData.applicant}</div>
                    <div className="text-sm text-gray-400">{applicationData.purpose}</div>
                  </div>
                </div>
                
                {/* Enhanced Processing Steps */}
                <div className="space-y-6">
                  {liveProcessingSteps.map((step, index) => {
                    const isActive = step.id === currentStep && isProcessing
                    const isCompleted = step.id < currentStep || (step.id === currentStep && processingProgress >= 100)
                    const isPending = step.id > currentStep
                    
                    return (
                      <div key={step.id} className={`relative flex items-start p-6 rounded-xl border transition-all duration-700 ${
                        isActive 
                          ? 'bg-gradient-to-r from-[#2CD5C4]/20 to-[#4C6FFF]/20 border-[#2CD5C4]/60 shadow-xl shadow-[#2CD5C4]/30' 
                          : isCompleted 
                            ? 'bg-gradient-to-r from-green-500/15 to-emerald-500/15 border-green-500/40 shadow-lg shadow-green-500/20'
                            : 'bg-gradient-to-r from-[#1A1F3C]/40 to-[#0A0F2D]/40 border-gray-600/30'
                      }`}>
                        {/* Enhanced Step Number/Icon */}
                        <div className={`flex items-center justify-center w-16 h-16 rounded-xl mr-6 transition-all duration-500 ${
                          isCompleted 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/50' 
                            : isActive 
                              ? 'bg-gradient-to-r from-[#2CD5C4] to-[#4C6FFF] text-white shadow-lg shadow-[#2CD5C4]/50 animate-pulse' 
                              : 'bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300'
                        }`}>
                          {isCompleted ? (
                            <CheckCircle2 size={28} />
                          ) : isActive ? (
                            <div className="relative">
                              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            </div>
                          ) : (
                            <span className="text-xl font-bold">{step.id}</span>
                          )}
                        </div>
                        
                        {/* Enhanced Step Content */}
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <Tooltip text={step.detail}>
                                <h3 className={`text-xl font-bold mb-2 cursor-help hover:text-[#2CD5C4] transition-colors ${
                                  isActive || isCompleted ? 'text-white' : 'text-gray-400'
                                }`}>
                                  {step.step}
                                </h3>
                              </Tooltip>
                              <p className={`text-base mb-2 ${
                                isActive || isCompleted ? 'text-gray-200' : 'text-gray-500'
                              }`}>
                                {step.description}
                              </p>
                              {isActive && (
                                <div className="text-sm text-yellow-400 flex items-center gap-2 mt-3">
                                  <Cpu size={16} />
                                  AI Thinking: <span className="font-semibold">{typingEffect}</span>
                                </div>
                              )}
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-gray-400">{step.timestamp}</div>
                              {isActive && (
                                <div className="mt-2 w-36 bg-gray-700 rounded-full h-2.5">
                                  <div 
                                    className="bg-gradient-to-r from-[#2CD5C4] to-[#4C6FFF] h-2.5 rounded-full transition-all duration-500" 
                                    style={{ width: `${processingProgress}%` }}
                                  ></div>
                                </div>
                              )}
                              {isCompleted && (
                                <div className="flex items-center gap-2 text-green-400 font-medium text-sm mt-2">
                                  <CheckCircle size={16} /> Completed
                                </div>
                              )}
                              {isPending && (
                                <div className="flex items-center gap-2 text-gray-500 font-medium text-sm mt-2">
                                  <Clock size={16} /> Pending
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {finalDecision && (
                  <div className="mt-10 p-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/60 rounded-2xl shadow-2xl shadow-green-500/40 text-center">
                    <h3 className="text-4xl font-extrabold text-green-400 flex items-center justify-center gap-4 mb-4">
                      <Award size={48} /> CREDIT {finalDecision.decision}
                    </h3>
                    <p className="text-xl text-white mb-2">
                      Applicant: <span className="font-bold">{applicationData.applicant}</span>
                    </p>
                    <p className="text-xl text-white mb-4">
                      Approved Amount: <span className="font-bold">{finalDecision.amount}</span>
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-left max-w-lg mx-auto">
                      <div className="bg-[#1A1F3C]/50 p-4 rounded-lg border border-green-500/30">
                        <div className="text-gray-400 text-sm mb-1">AI Confidence</div>
                        <div className="text-green-400 text-lg font-bold">{finalDecision.confidence.toFixed(1)}%</div>
                      </div>
                      <div className="bg-[#1A1F3C]/50 p-4 rounded-lg border border-green-500/30">
                        <div className="text-gray-400 text-sm mb-1">Risk Score</div>
                        <div className="text-green-400 text-lg font-bold">{finalDecision.riskScore}</div>
                      </div>
                      <div className="bg-[#1A1F3C]/50 p-4 rounded-lg border border-green-500/30">
                        <div className="text-gray-400 text-sm mb-1">Processing Time</div>
                        <div className="text-green-400 text-lg font-bold">{finalDecision.processingTime}</div>
                      </div>
                      <div className="bg-[#1A1F3C]/50 p-4 rounded-lg border border-green-500/30">
                        <div className="text-gray-400 text-sm mb-1">Recommended Terms</div>
                        <div className="text-green-400 text-lg font-bold">{finalDecision.terms}</div>
                      </div>
                    </div>
                    <div className="mt-6 text-gray-300 text-sm">
                      <span className="font-bold">Conditions:</span> {finalDecision.conditions.join(', ')}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Document Analysis & AI Insights */}
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#1B2C6B]/40 to-[#0A0F2D]/40 rounded-2xl p-8 border border-[#2CD5C4]/30 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <FileCheck size={24} className="text-[#2CD5C4]" /> Document Processing Details
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(applicationData.documents).map(([key, doc], idx) => (
                      <div key={key} className="flex justify-between items-center py-2 px-4 rounded-lg bg-[#1A1F3C]/50 border border-gray-700">
                        <div className="flex items-center gap-3">
                          {doc.status === 'completed' ? <CheckCircle2 size={18} className="text-green-400" /> :
                           doc.status === 'processing' ? <RefreshCw size={18} className="text-yellow-400 animate-spin" /> :
                           <Clock size={18} className="text-gray-500" />}
                          <span className="text-white text-sm capitalize">{key.replace(/_/g, ' ')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {doc.confidence > 0 && <span className="text-xs text-gray-400">{doc.confidence}%</span>}
                          <span className="text-xs text-gray-400">{doc.size}</span>
                          <span className={`text-sm font-medium ${
                            doc.status === 'completed' ? 'text-green-400' :
                            doc.status === 'processing' ? 'text-yellow-400' :
                            'text-gray-500'
                          }`}>
                            {doc.status.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#1B2C6B]/40 to-[#0A0F2D]/40 rounded-2xl p-8 border border-purple-400/30 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <Brain size={24} className="text-purple-400" /> AI Insights & Analysis
                  </h3>
                  <div className="space-y-4">
                    {documentAnalysis.length === 0 ? (
                      <p className="text-gray-400 text-center py-4">AI analysis will appear here after processing starts.</p>
                    ) : (
                      documentAnalysis.map((insight, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2 px-4 rounded-lg bg-[#1A1F3C]/50 border border-gray-700">
                          <div className="flex items-center gap-3">
                            {insight.status === 'completed' ? <CheckCircle2 size={18} className="text-green-400" /> :
                             <Activity size={18} className="text-yellow-400 animate-pulse" />}
                            <span className="text-white text-sm">{insight.type}</span>
                          </div>
                          <Tooltip text={insight.details} position="left">
                            <span className={`text-sm font-medium cursor-help ${
                              insight.status === 'completed' ? 'text-green-400' : 'text-yellow-400'
                            }`}>
                              {insight.result}
                            </span>
                          </Tooltip>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AI ENGINE PAGE */}
          {activeMenu === 'ai-engine' && (
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#1B2C6B]/50 to-[#0A0F2D]/50 rounded-2xl p-8 border border-[#2CD5C4]/30 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-[#2CD5C4]/20 text-[#2CD5C4] shadow-lg shadow-[#2CD5C4]/30">
                    <Cpu size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Multimodal AI Engine</h3>
                    <p className="text-sm text-gray-400">Advanced deep learning models for comprehensive financial analysis</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="bg-[#1A1F3C]/50 p-5 rounded-xl border border-[#2CD5C4]/30">
                    <div className="text-gray-400 text-sm mb-2">Total AI Models</div>
                    <div className="text-3xl font-bold text-[#2CD5C4]">{aiModelStats.length}</div>
                  </div>
                  <div className="bg-[#1A1F3C]/50 p-5 rounded-xl border border-green-400/30">
                    <div className="text-gray-400 text-sm mb-2">Avg. Accuracy</div>
                    <div className="text-3xl font-bold text-green-400">
                      {(aiModelStats.reduce((sum, m) => sum + m.accuracy, 0) / aiModelStats.length).toFixed(1)}%
                    </div>
                  </div>
                  <div className="bg-[#1A1F3C]/50 p-5 rounded-xl border border-yellow-400/30">
                    <div className="text-gray-400 text-sm mb-2">Live Processing</div>
                    <div className="text-3xl font-bold text-yellow-400">
                      {aiModelStats.filter(m => m.processing).length} Models
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-white mb-4">AI Model Status & Usage</h4>
                <div className="space-y-3">
                  {aiModelStats.map((model, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-[#1A1F3C]/50 rounded-lg border border-gray-700">
                      <div className="flex items-center gap-3">
                        {model.processing ? (
                          <div className="relative">
                            <div className="w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                          </div>
                        ) : (
                          <div className={`w-3 h-3 rounded-full ${model.status === 'active' ? 'bg-green-400' : 'bg-gray-500'}`}></div>
                        )}
                        <span className="text-white font-medium">{model.name}</span>
                        <span className="px-2 py-0.5 text-xs rounded-full bg-[#2CD5C4]/20 text-[#2CD5C4]">{model.type}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-400 text-sm">{model.usage}</span>
                        <span className="text-green-400 font-bold text-sm">{model.accuracy.toFixed(1)}% Accuracy</span>
                        <span className={`px-2 py-0.5 text-xs rounded-full ${
                          model.status === 'active' ? 'bg-green-500/20 text-green-400' :
                          model.status === 'processing' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {model.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real-time AI Analysis Log */}
              <div className="bg-gradient-to-br from-[#1B2C6B]/40 to-[#0A0F2D]/40 rounded-2xl p-8 border border-blue-400/30 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Activity size={24} className="text-blue-400" /> Real-time AI Operations Log
                </h3>
                <div className="h-64 overflow-y-auto custom-scrollbar">
                  {aiInsights.length === 0 ? (
                    <p className="text-gray-400 text-center py-4">AI operations log will appear here...</p>
                  ) : (
                    <div className="space-y-3">
                      {aiInsights.map((log, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-3 bg-[#1A1F3C]/50 rounded-lg border border-gray-700">
                          <Clock size={16} className="text-gray-500 flex-shrink-0 mt-1" />
                          <div className="flex-grow">
                            <div className="text-gray-400 text-xs">{log.timestamp}</div>
                            <p className="text-sm text-gray-200">{log.message}</p>
                            <div className="flex items-center text-xs text-gray-500 mt-1">
                              <Sparkles size={12} className="mr-1 text-yellow-400" />
                              <span className="text-yellow-400 font-medium">{log.confidence.toFixed(1)}% Confidence</span>
                              <span className="ml-4 text-gray-500">Model: {log.model}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="mt-6 text-center text-gray-300 text-lg flex items-center justify-center gap-3">
                  <Zap size={20} className="text-purple-400 animate-pulse" />
                  <span className="font-semibold">{realTimeAnalysis || "Awaiting real-time analysis..."}</span>
                </div>
              </div>
              {renderAIReport()}
            </div>
          )}

          {/* SMART CONTRACTS PAGE */}
          {activeMenu === 'smart-contracts' && (
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#1B2C6B]/50 to-[#0A0F2D]/50 rounded-2xl p-8 border border-[#2CD5C4]/30 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-[#2CD5C4]/20 text-[#2CD5C4] shadow-lg shadow-[#2CD5C4]/30">
                    <Code size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Smart Contract Automation Hub</h3>
                    <p className="text-sm text-gray-400">Blockchain-powered automated credit operations</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-6 mb-8">
                  <div className="bg-[#1A1F3C]/50 p-5 rounded-xl border border-[#2CD5C4]/30 text-center">
                    <div className="text-gray-400 text-sm mb-2">Network TPS</div>
                    <div className="text-3xl font-bold text-[#2CD5C4]">{networkStats.tps}</div>
                  </div>
                  <div className="bg-[#1A1F3C]/50 p-5 rounded-xl border border-green-400/30 text-center">
                    <div className="text-gray-400 text-sm mb-2">Gas Price</div>
                    <div className="text-3xl font-bold text-green-400">{networkStats.gasPrice} Gwei</div>
                  </div>
                  <div className="bg-[#1A1F3C]/50 p-5 rounded-xl border border-yellow-400/30 text-center">
                    <div className="text-gray-400 text-sm mb-2">Block Height</div>
                    <div className="text-3xl font-bold text-yellow-400">{networkStats.blockHeight.toLocaleString()}</div>
                  </div>
                  <div className="bg-[#1A1F3C]/50 p-5 rounded-xl border border-purple-400/30 text-center">
                    <div className="text-gray-400 text-sm mb-2">Contracts Deployed</div>
                    <div className="text-3xl font-bold text-purple-400">{smartContractFunctions.length}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  {/* Contract Execution Flow */}
                  <div className="bg-[#1A1F3C]/50 p-6 rounded-xl border border-yellow-400/30">
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Workflow size={20} className="text-yellow-400" /> Contract Execution Flow
                    </h4>
                    <div className="space-y-4">
                      {contractExecutionFlow.map((flow, index) => (
                        <div key={index} className="flex items-center">
                          <div className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                            flow.status === 'completed' ? 'bg-green-500 border-green-500 text-white' :
                            flow.status === 'active' ? 'bg-yellow-500 border-yellow-500 text-white animate-pulse' :
                            'bg-gray-700 border-gray-600 text-gray-400'
                          }`}>
                            {flow.status === 'completed' ? <CheckCircle2 size={16} /> : flow.step}
                          </div>
                          <div className="ml-4 flex-1">
                            <h5 className={`font-medium ${
                              flow.status === 'completed' ? 'text-white' :
                              flow.status === 'active' ? 'text-yellow-400' :
                              'text-gray-400'
                            }`}>{flow.name}</h5>
                            <p className="text-xs text-gray-500">{flow.description}</p>
                          </div>
                          {flow.status === 'active' && (
                            <div className="ml-4 w-24 bg-gray-700 rounded-full h-1.5">
                              <div 
                                className="bg-gradient-to-r from-yellow-500 to-orange-500 h-1.5 rounded-full transition-all duration-300" 
                                style={{ width: `${contractProgress}%` }}
                              ></div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Smart Contract Functions */}
                  <div className="bg-[#1A1F3C]/50 p-6 rounded-xl border border-blue-400/30">
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Layers size={20} className="text-blue-400" /> Key Smart Contract Functions
                    </h4>
                    <div className="space-y-4">
                      {smartContractFunctions.map((func, index) => (
                        <Tooltip key={index} text={func.tooltip} position="left">
                          <div className="p-4 bg-[#1A1F3C]/60 rounded-lg border border-gray-700 flex justify-between items-center cursor-help">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-white font-medium">{func.name}</span>
                                <span className={`px-2 py-0.5 text-xs rounded-full ${
                                  func.status === 'deployed' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                                }`}>{func.status.toUpperCase()}</span>
                              </div>
                              <p className="text-gray-400 text-xs">{func.description}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-gray-500 text-xs">Gas Limit: <span className="text-blue-400 font-medium">{func.gasLimit}</span></div>
                              <div className="text-gray-500 text-xs">Last Run: <span className="text-gray-300 font-medium">{func.lastExecution}</span></div>
                            </div>
                          </div>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Blockchain Network Visualization */}
                <div className="mt-8 bg-[#1A1F3C]/50 p-6 rounded-xl border border-green-400/30">
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Network size={20} className="text-green-400" /> Blockchain Network Activity
                  </h4>
                  <div className="flex justify-around items-center h-28 relative">
                    {blockchainVisualization.map((block, index) => (
                      <div 
                        key={block.id} 
                        className="flex flex-col items-center relative z-10 transition-all duration-1000 ease-out"
                        style={{ left: `${index * 15}%` }} // Simple distribution
                      >
                        <div className="bg-gradient-to-br from-green-500/30 to-emerald-500/30 border border-green-400/50 p-3 rounded-lg shadow-xl relative animate-bounce-subtle">
                          <Database size={24} className="text-green-400" />
                          <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                            {block.transactions} Tx
                          </div>
                        </div>
                        <div className="text-xs text-gray-400 mt-2">Block: {block.id}</div>
                        <div className="text-xs text-gray-500">{block.timestamp}</div>
                      </div>
                    ))}
                    <div className="absolute left-0 right-0 h-1 bg-gray-700 top-1/2 -translate-y-1/2"></div>
                  </div>
                  <div className="mt-6 flex justify-around text-center text-sm">
                    <div>
                      <div className="text-gray-400">Current Gas Burn</div>
                      <div className="text-red-400 font-bold">{gasOptimization.current.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Optimized Gas</div>
                      <div className="text-green-400 font-bold">{gasOptimization.optimized.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Gas Savings</div>
                      <div className="text-[#2CD5C4] font-bold">{gasOptimization.savings.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Smart Contract Activity Log */}
              <div className="bg-gradient-to-br from-[#1B2C6B]/40 to-[#0A0F2D]/40 rounded-2xl p-8 border border-yellow-400/30 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Activity size={24} className="text-yellow-400" /> Smart Contract Activity Log
                </h3>
                <div className="h-64 overflow-y-auto custom-scrollbar">
                  {contractActivity.length === 0 ? (
                    <p className="text-gray-400 text-center py-4">Smart contract activities will appear here...</p>
                  ) : (
                    <div className="space-y-3">
                      {contractActivity.map((log, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-3 bg-[#1A1F3C]/50 rounded-lg border border-gray-700">
                          <Clock size={16} className="text-gray-500 flex-shrink-0 mt-1" />
                          <div className="flex-grow">
                            <div className="text-gray-400 text-xs">{log.timestamp}</div>
                            <p className="text-sm text-gray-200">
                              <span className="font-medium text-[#2CD5C4]">{log.function}:</span> {log.action} for <span className="font-medium text-white">{log.borrower}</span> ({log.amount})
                            </p>
                            <div className="flex items-center text-xs text-gray-500 mt-1">
                              <Hash size={12} className="mr-1 text-purple-400" />
                              <span className="text-purple-400 font-mono">{log.hash}</span>
                              <span className="ml-4 text-gray-500">Gas: {log.gas}</span>
                            </div>
                          </div>
                          {log.status === 'success' && <CheckCircle2 size={20} className="text-green-400 flex-shrink-0" />}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* COMPLIANCE PAGE */}
          {activeMenu === 'compliance' && (
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#1B2C6B]/50 to-[#0A0F2D]/50 rounded-2xl p-8 border border-[#2CD5C4]/30 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-[#2CD5C4]/20 text-[#2CD5C4] shadow-lg shadow-[#2CD5C4]/30">
                    <Shield size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Real-Time Compliance Monitoring</h3>
                    <p className="text-sm text-gray-400">Automated regulatory adherence with AI-driven checks</p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-6 mb-8">
                  <div className="bg-[#1A1F3C]/50 p-5 rounded-xl border border-[#2CD5C4]/30 text-center">
                    <div className="text-gray-400 text-sm mb-2">Total Rules Monitored</div>
                    <div className="text-3xl font-bold text-[#2CD5C4]">{complianceRules.length}</div>
                  </div>
                  <div className="bg-[#1A1F3C]/50 p-5 rounded-xl border border-green-400/30 text-center">
                    <div className="text-gray-400 text-sm mb-2">Current Compliance Score</div>
                    <div className="text-3xl font-bold text-green-400">
                      {(complianceRules.reduce((sum, r) => sum + r.score, 0) / complianceRules.length).toFixed(1)}%
                    </div>
                  </div>
                  <div className="bg-[#1A1F3C]/50 p-5 rounded-xl border border-yellow-400/30 text-center">
                    <div className="text-gray-400 text-sm mb-2">Alerts Generated (24h)</div>
                    <div className="text-3xl font-bold text-yellow-400">0</div> {/* Assuming no active alerts for demo */}
                  </div>
                  <div className="bg-[#1A1F3C]/50 p-5 rounded-xl border border-purple-400/30 text-center">
                    <div className="text-gray-400 text-sm mb-2">Automated Actions</div>
                    <div className="text-3xl font-bold text-purple-400">73</div> {/* Placeholder */}
                  </div>
                </div>

                <h4 className="text-lg font-bold text-white mb-4">Regulatory Compliance Status</h4>
                <div className="space-y-3">
                  {complianceRules.map((rule, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-[#1A1F3C]/50 rounded-lg border border-gray-700">
                      <div className="flex items-center gap-3">
                        {rule.status === 'monitoring' ? (
                          <RefreshCw size={18} className="text-blue-400 animate-spin" />
                        ) : (
                          <CheckCircle2 size={18} className="text-green-400" />
                        )}
                        <span className="text-white font-medium">{rule.rule}</span>
                        <span className={`px-2 py-0.5 text-xs rounded-full ${
                          rule.result === 'compliant' || rule.result === 'verified' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {rule.result.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-400 text-sm">{rule.details}</span>
                        <span className="text-green-400 font-bold text-sm">{rule.score}% Score</span>
                        <span className="text-gray-500 text-xs">Last Check: {rule.lastCheck}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance Activity Log */}
              <div className="bg-gradient-to-br from-[#1B2C6B]/40 to-[#0A0F2D]/40 rounded-2xl p-8 border border-orange-400/30 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Bell size={24} className="text-orange-400" /> Compliance Activity Log
                </h3>
                <div className="h-64 overflow-y-auto custom-scrollbar">
                  {complianceActivity.length === 0 ? (
                    <p className="text-gray-400 text-center py-4">Compliance activities will appear here...</p>
                  ) : (
                    <div className="space-y-3">
                      {complianceActivity.map((log, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-3 bg-[#1A1F3C]/50 rounded-lg border border-gray-700">
                          <Clock size={16} className="text-gray-500 flex-shrink-0 mt-1" />
                          <div className="flex-grow">
                            <div className="text-gray-400 text-xs">{log.timestamp}</div>
                            <p className="text-sm text-gray-200">{log.action}</p>
                            <div className="flex items-center text-xs text-gray-500 mt-1">
                              <Shield size={12} className="mr-1 text-green-400" />
                              <span className="text-green-400 font-medium">Score: {log.score}%</span>
                            </div>
                          </div>
                          {log.status === 'verified' && <CheckCircle2 size={20} className="text-green-400 flex-shrink-0" />}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {renderCreditAnalytics()}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App