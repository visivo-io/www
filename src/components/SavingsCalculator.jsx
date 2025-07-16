import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTrendingUp, FiDollarSign, FiClock, FiUsers } from 'react-icons/fi';
import { Tooltip } from 'flowbite-react';
import EmailCaptureForm from './EmailCaptureForm';

const SavingsCalculator = () => {
  // Constants
  const HOURLY_RATE = 100; // $100/hr for data professionals
  const TRADITIONAL_DASHBOARD_HOURS = 15; // hours per week per dashboard
  const VISIVO_DASHBOARD_HOURS = 2; // hours per week per dashboard
  const ANALYST_HOURS_SAVED = 20; // hours per week per analyst
  const INFRASTRUCTURE_SAVINGS_PERCENT = 0.30; // 30% savings
  const STAKEHOLDER_HOURS_SAVED = 3; // hours per week per stakeholder
  // Helper function to calculate values
  const calculateValues = (dashboards, stakeholders, analysts, currentBIHours, revenueImpact) => {
    const dashboardTimeSaved = dashboards * (TRADITIONAL_DASHBOARD_HOURS - VISIVO_DASHBOARD_HOURS);
    const analystTimeSaved = analysts * ANALYST_HOURS_SAVED;
    const stakeholderTimeSaved = stakeholders * STAKEHOLDER_HOURS_SAVED;
    const totalTimeSaved = dashboardTimeSaved + analystTimeSaved + stakeholderTimeSaved;
    
    const weeklyCostSavings = totalTimeSaved * HOURLY_RATE;
    const annualTimeCostSavings = weeklyCostSavings * 52;
    const infrastructureSavings = (currentBIHours * HOURLY_RATE * 52) * INFRASTRUCTURE_SAVINGS_PERCENT;
    const totalCostSavings = annualTimeCostSavings + infrastructureSavings + revenueImpact;
    
    const VISIVO_MONTHLY_COST = 22 * (analysts + stakeholders);
    const annualVisivoCoSt = VISIVO_MONTHLY_COST * 12;
    const calculatedRoi = ((totalCostSavings - annualVisivoCoSt) / annualVisivoCoSt) * 100;
    
    return { totalTimeSaved, totalCostSavings, calculatedRoi };
  };
  
  // Initial values
  const initialDashboards = 25;
  const initialStakeholders = 20;
  const initialAnalysts = 3;
  const initialBIHours = 40;
  const initialRevenue = 50000;
  
  // Calculate initial values
  const initialCalcs = calculateValues(initialDashboards, initialStakeholders, initialAnalysts, initialBIHours, initialRevenue);
  
  // State for inputs with SMB defaults
  const [dashboards, setDashboards] = useState(initialDashboards);
  const [stakeholders, setStakeholders] = useState(initialStakeholders);
  const [analysts, setAnalysts] = useState(initialAnalysts);
  const [currentBIHours, setCurrentBIHours] = useState(initialBIHours);
  const [revenueImpact, setRevenueImpact] = useState(initialRevenue);
  
  // State for calculations with initial values
  const [timeSaved, setTimeSaved] = useState(initialCalcs.totalTimeSaved);
  const [costSavings, setCostSavings] = useState(initialCalcs.totalCostSavings);
  const [roi, setRoi] = useState(initialCalcs.calculatedRoi);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showAnalysisForm, setShowAnalysisForm] = useState(false);
  const [hasTriggeredConfetti, setHasTriggeredConfetti] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [previousValues, setPreviousValues] = useState({
    dashboards: initialDashboards,
    stakeholders: initialStakeholders,
    analysts: initialAnalysts,
    currentBIHours: initialBIHours,
    revenueImpact: initialRevenue
  });

  // Calculate savings whenever inputs change
  useEffect(() => {
    // Check if values actually changed
    const valuesChanged = 
      dashboards !== previousValues.dashboards ||
      stakeholders !== previousValues.stakeholders ||
      analysts !== previousValues.analysts ||
      currentBIHours !== previousValues.currentBIHours ||
      revenueImpact !== previousValues.revenueImpact;
    
    if (!valuesChanged) return;
    
    // Update previous values
    setPreviousValues({ dashboards, stakeholders, analysts, currentBIHours, revenueImpact });
    
    // Calculate new values
    const { totalTimeSaved, totalCostSavings, calculatedRoi } = calculateValues(
      dashboards, stakeholders, analysts, currentBIHours, revenueImpact
    );
    
    // Update state with animations
    setTimeSaved(totalTimeSaved);
    setCostSavings(totalCostSavings);
    setRoi(calculatedRoi);
    setIsAnimating(true);
    
    // Show confetti after animation completes if ROI > 300%
    if (calculatedRoi > 300 && !hasTriggeredConfetti) {
      setTimeout(() => {
        setShowConfetti(true);
        setHasTriggeredConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }, 1200); // Wait for number animation to complete
    } else if (calculatedRoi <= 300) {
      setHasTriggeredConfetti(false);
    }
    
    // Reset animation flag
    setTimeout(() => setIsAnimating(false), 1000);
  }, [dashboards, stakeholders, analysts, currentBIHours, revenueImpact, previousValues, hasTriggeredConfetti]);

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Animated counter component
  const AnimatedCounter = ({ value, format = 'number', suffix = '' }) => {
    const [displayValue, setDisplayValue] = useState(value);
    const [previousValue, setPreviousValue] = useState(value);
    const [hasInitialized, setHasInitialized] = useState(false);
    
    useEffect(() => {
      // Set initial value without animation
      if (!hasInitialized) {
        setDisplayValue(value);
        setPreviousValue(value);
        setHasInitialized(true);
        return;
      }
      
      // Only animate if animating flag is true and value changed
      if (!isAnimating || value === previousValue) {
        setDisplayValue(value);
        return;
      }
      
      setPreviousValue(value);
      const duration = 1000; // 1 second
      const steps = 60;
      const startValue = displayValue;
      const difference = value - startValue;
      const increment = difference / steps;
      let step = 0;
      
      const timer = setInterval(() => {
        step++;
        if (step >= steps) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(startValue + (increment * step));
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }, [value, isAnimating, previousValue, displayValue, hasInitialized]);
    
    const formattedValue = format === 'currency' 
      ? formatCurrency(displayValue)
      : Math.round(displayValue).toLocaleString();
    
    return <span>{formattedValue}{suffix}</span>;
  };

  // Tooltip content for each input
  const tooltipContent = {
    dashboards: "Each dashboard requires regular maintenance, updates, and troubleshooting",
    stakeholders: "Business users who consume dashboards and request changes",
    analysts: "Data professionals who build and maintain dashboards",
    currentBIHours: "Total weekly hours your data warehouse is running because of your BI tool",
    revenueImpact: "Additional revenue from better data-driven decisions"
  };

  // Slider component
  const Slider = ({ label, value, onChange, min, max, step = 1, icon, tooltipKey }) => (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          <Tooltip content={tooltipContent[tooltipKey]} placement="top">
            <span className="cursor-help">{icon}</span>
          </Tooltip>
          {label}
        </label>
        <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
          {value.toLocaleString()}
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary-500"
        />
        <div 
          className="absolute h-2 bg-primary-500 rounded-lg pointer-events-none"
          style={{ width: `${((value - min) / (max - min)) * 100}%` }}
        />
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            See Your Potential Savings
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Calculate how much time and money you could save by switching to Visivo's modern BI platform
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Section */}
          <motion.div 
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Tell us about your current setup
            </h3>
            
            <Slider
              label="Number of Dashboards"
              value={dashboards}
              onChange={setDashboards}
              min={5}
              max={100}
              icon={<FiTrendingUp className="h-4 w-4" />}
              tooltipKey="dashboards"
            />
            
            <Slider
              label="Number of Stakeholders"
              value={stakeholders}
              onChange={setStakeholders}
              min={5}
              max={100}
              icon={<FiUsers className="h-4 w-4" />}
              tooltipKey="stakeholders"
            />
            
            <Slider
              label="Number of Analysts"
              value={analysts}
              onChange={setAnalysts}
              min={1}
              max={20}
              icon={<FiUsers className="h-4 w-4" />}
              tooltipKey="analysts"
            />
            
            <Slider
              label="Current BI Tool Hours/Week"
              value={currentBIHours}
              onChange={setCurrentBIHours}
              min={10}
              max={100}
              icon={<FiClock className="h-4 w-4" />}
              tooltipKey="currentBIHours"
            />
            
            <Slider
              label="Expected Revenue Impact/Year"
              value={revenueImpact}
              onChange={setRevenueImpact}
              min={0}
              max={500000}
              step={10000}
              icon={<FiDollarSign className="h-4 w-4" />}
              tooltipKey="revenueImpact"
            />
          </motion.div>

          {/* Results Section */}
          <motion.div 
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Your potential savings with Visivo
            </h3>

            {/* Time Saved */}
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Time Saved Per Week</span>
                <FiClock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                <AnimatedCounter value={timeSaved} suffix=" hours" />
              </div>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                = {dashboards} dashboards × 13 hrs + {analysts} analysts × 20 hrs + {stakeholders} stakeholders × 3 hrs
              </div>
            </div>

            {/* Cost Savings */}
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Annual Cost Savings</span>
                <FiDollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                <AnimatedCounter value={costSavings} format="currency" />
              </div>
              <div className="mt-2 space-y-1">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Time savings: {formatCurrency(timeSaved * HOURLY_RATE * 52)}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Infrastructure: {formatCurrency((currentBIHours * HOURLY_RATE * 52) * INFRASTRUCTURE_SAVINGS_PERCENT)}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Revenue impact: {formatCurrency(revenueImpact)}
                </div>
              </div>
            </div>

            {/* ROI */}
            <div className="mb-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Return on Investment</span>
                <FiTrendingUp className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                <AnimatedCounter value={roi} suffix="%" />
              </div>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Visivo cost: {formatCurrency(27 * (analysts + stakeholders) * 12)}/year
              </div>
              
              {/* Progress bar */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-purple-600 dark:bg-purple-400"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(roi / 5, 100)}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={() => setShowAnalysisForm(true)}
              className="w-full py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Your Custom Analysis
            </motion.button>
          </motion.div>
        </div>

        {/* Confetti Animation */}
        <AnimatePresence>
          {showConfetti && (
            <motion.div
              className="fixed inset-0 pointer-events-none z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary-500"
                  initial={{
                    x: window.innerWidth / 2,
                    y: window.innerHeight / 2,
                    rotate: 0
                  }}
                  animate={{
                    x: Math.random() * window.innerWidth,
                    y: window.innerHeight + 100,
                    rotate: Math.random() * 720
                  }}
                  transition={{
                    duration: 3,
                    delay: Math.random() * 0.5,
                    ease: "easeOut"
                  }}
                  style={{
                    left: 0,
                    top: 0,
                    backgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)`
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Analysis Form Modal */}
        <AnimatePresence>
          {showAnalysisForm && (
            <>
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowAnalysisForm(false)}
              />
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-md w-full p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Your Potential Savings: {formatCurrency(costSavings)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Get a personalized cost-benefit analysis for your team
                  </p>
                  <EmailCaptureForm
                    title=""
                    description=""
                    buttonText="Get My Analysis"
                    endpoint="/.netlify/functions/collect-analysis-request"
                    successMessage="We'll send your analysis within 24 hours!"
                    additionalData={{
                      dashboards,
                      stakeholders,
                      analysts,
                      currentBIHours,
                      revenueImpact,
                      timeSaved,
                      costSavings,
                      roi
                    }}
                  />
                  <button
                    onClick={() => setShowAnalysisForm(false)}
                    className="mt-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SavingsCalculator;