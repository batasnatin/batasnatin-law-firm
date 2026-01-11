"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  Heart,
  AlertCircle,
  Phone,
  Mail
} from "lucide-react";

interface Question {
  id: string;
  question: string;
  helpText?: string;
  type: "boolean" | "select" | "income";
}

const questions: Question[] = [
  {
    id: "isLaborer",
    question: "Are you a laborer or rank-and-file employee (not a manager or supervisor)?",
    helpText: "Pro bono services are primarily for workers in non-managerial positions",
    type: "boolean"
  },
  {
    id: "caseType",
    question: "What type of case do you have?",
    helpText: "Select the primary issue you're facing",
    type: "select"
  },
  {
    id: "hasMerit",
    question: "Do you have documentation or evidence supporting your claim?",
    helpText: "Examples: employment contract, payslips, termination notice, text messages, emails",
    type: "boolean"
  },
  {
    id: "monthlyIncome",
    question: "What is your monthly household income?",
    helpText: "Combined income of all working members in your household",
    type: "income"
  },
  {
    id: "cannotAfford",
    question: "Would paying for a lawyer cause significant financial hardship to your family?",
    helpText: "Consider your family's basic needs, medical expenses, and essential costs",
    type: "boolean"
  }
];

const caseTypeOptions = [
  { value: "illegal-dismissal", label: "Illegal Dismissal", eligible: true },
  { value: "constructive-dismissal", label: "Constructive Dismissal", eligible: true },
  { value: "non-payment-wages", label: "Non-Payment of Wages/Benefits", eligible: true },
  { value: "illegal-suspension", label: "Illegal Suspension", eligible: true },
  { value: "labor-standards", label: "Labor Standards Violations (13th month, SIL, etc.)", eligible: true },
  { value: "harassment", label: "Workplace Harassment or Abuse", eligible: true },
  { value: "other", label: "Other Labor Issue", eligible: false }
];

const incomeRanges = [
  { value: "0-15000", label: "₱0 - ₱15,000", eligible: true },
  { value: "15001-25000", label: "₱15,001 - ₱25,000", eligible: true },
  { value: "25001-35000", label: "₱25,001 - ₱35,000", eligible: "maybe" },
  { value: "35001-50000", label: "₱35,001 - ₱50,000", eligible: "maybe" },
  { value: "50001+", label: "₱50,001 and above", eligible: false }
];

export default function ProBonoChecker() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: string, answer: any) => {
    setAnswers({ ...answers, [questionId]: answer });

    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  const calculateEligibility = () => {
    const { isLaborer, caseType, hasMerit, monthlyIncome, cannotAfford } = answers;

    // Check hard requirements
    if (!isLaborer) return "not-eligible";
    if (!hasMerit) return "weak-case";
    if (!cannotAfford) return "can-afford";

    // Check case type eligibility
    const selectedCase = caseTypeOptions.find(opt => opt.value === caseType);
    if (!selectedCase?.eligible) return "wrong-case-type";

    // Check income eligibility
    const selectedIncome = incomeRanges.find(range => range.value === monthlyIncome);
    if (selectedIncome?.eligible === false) return "income-too-high";
    if (selectedIncome?.eligible === "maybe") return "maybe-eligible";

    return "eligible";
  };

  const resetChecker = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const renderQuestion = (question: Question) => {
    switch (question.type) {
      case "boolean":
        return (
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="flex-1 h-auto py-6 bg-green-600 hover:bg-green-700 text-white"
              onClick={() => handleAnswer(question.id, true)}
            >
              <CheckCircle className="mr-2 h-6 w-6" />
              Yes
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex-1 h-auto py-6 border-2 border-red-500 text-red-600 hover:bg-red-50"
              onClick={() => handleAnswer(question.id, false)}
            >
              <XCircle className="mr-2 h-6 w-6" />
              No
            </Button>
          </div>
        );

      case "select":
        return (
          <div className="space-y-3">
            {caseTypeOptions.map((option) => (
              <Button
                key={option.value}
                size="lg"
                variant="outline"
                className="w-full h-auto py-4 text-left justify-start border-2 hover:border-amber-500 hover:bg-amber-50"
                onClick={() => handleAnswer(question.id, option.value)}
              >
                <ArrowRight className="mr-2 h-5 w-5 text-amber-600" />
                {option.label}
              </Button>
            ))}
          </div>
        );

      case "income":
        return (
          <div className="space-y-3">
            {incomeRanges.map((range) => (
              <Button
                key={range.value}
                size="lg"
                variant="outline"
                className="w-full h-auto py-4 text-left justify-start border-2 hover:border-amber-500 hover:bg-amber-50"
                onClick={() => handleAnswer(question.id, range.value)}
              >
                <ArrowRight className="mr-2 h-5 w-5 text-amber-600" />
                {range.label}
              </Button>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  const renderResult = () => {
    const eligibility = calculateEligibility();

    const results = {
      "eligible": {
        icon: CheckCircle,
        color: "green",
        title: "You May Qualify for Pro Bono Services! 🎉",
        message: "Based on your answers, you appear to qualify for our free legal representation program. We handle cases from filing through Supreme Court at no cost to you.",
        action: "Contact us immediately to schedule a consultation and case evaluation.",
        cta: "Apply for Pro Bono Services"
      },
      "maybe-eligible": {
        icon: AlertCircle,
        color: "amber",
        title: "You Might Qualify (Case-by-Case Basis)",
        message: "Your case may qualify for pro bono services depending on additional factors. We'll need to review your specific circumstances during a consultation.",
        action: "Contact us for a consultation to discuss your eligibility. We may offer reduced fees or payment plans.",
        cta: "Request Consultation"
      },
      "not-eligible": {
        icon: XCircle,
        color: "red",
        title: "Pro Bono Services May Not Apply",
        message: "Our pro bono program is specifically designed for laborers and rank-and-file employees. However, we still want to help!",
        action: "We offer affordable consultation rates (₱2,500) and competitive representation fees. Contact us to discuss your options.",
        cta: "Schedule Paid Consultation"
      },
      "weak-case": {
        icon: AlertCircle,
        color: "amber",
        title: "Insufficient Documentation",
        message: "Pro bono services require cases with sufficient evidence. However, we can help you gather and evaluate your evidence.",
        action: "Schedule a consultation to review what evidence you have and what additional documentation may be needed.",
        cta: "Get Help Building Your Case"
      },
      "can-afford": {
        icon: AlertCircle,
        color: "amber",
        title: "Alternative Legal Services Available",
        message: "While you may not qualify for free services, we offer competitive rates and payment plans.",
        action: "Our standard consultation fee is ₱2,500 (waived if you retain our services). We also offer installment payment options.",
        cta: "Discuss Payment Options"
      },
      "wrong-case-type": {
        icon: AlertCircle,
        color: "amber",
        title: "Different Service Area",
        message: "This type of case may not be covered under our labor law pro bono program, but we can still assist you.",
        action: "Contact us to discuss your case. We handle various practice areas with affordable rates.",
        cta: "Explore Other Services"
      },
      "income-too-high": {
        icon: AlertCircle,
        color: "amber",
        title: "Income Above Pro Bono Threshold",
        message: "Based on your household income, you may be able to afford standard legal services. We offer competitive rates!",
        action: "Standard consultation: ₱2,500 (waived if retained). We also offer payment plans for representation.",
        cta: "View Standard Services"
      }
    };

    const result = results[eligibility as keyof typeof results];
    const Icon = result.icon;
    const isEligible = eligibility === "eligible";

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-6"
      >
        <Card className={`border-4 border-${result.color}-500 shadow-2xl`}>
          <CardHeader className={`bg-gradient-to-r from-${result.color}-500 to-${result.color}-600 text-white`}>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Icon className="h-10 w-10" />
              {result.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <p className="text-lg text-slate-700">{result.message}</p>

            <div className={`p-6 bg-${result.color}-50 rounded-lg border-2 border-${result.color}-200`}>
              <p className="text-slate-700">
                <strong className={`text-${result.color}-900`}>Next Steps:</strong>
                <br />
                {result.action}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <a href="tel:+639159546080">
                <Button size="lg" variant="outline" className="w-full">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </Button>
              </a>
              <a href="mailto:info@batasnatin.com">
                <Button size="lg" variant="outline" className="w-full">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Button>
              </a>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <a href={isEligible ? "/pro-bono" : "/contact"}>
                <Button
                  size="lg"
                  className={`w-full bg-${result.color}-600 hover:bg-${result.color}-700 text-white`}
                >
                  {result.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>

            <div className="text-center pt-4">
              <Button
                variant="ghost"
                onClick={resetChecker}
                className="text-slate-600 hover:text-slate-900"
              >
                Start Over
              </Button>
            </div>
          </CardContent>
        </Card>

        {isEligible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Heart className="h-8 w-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2">What to Prepare:</h4>
                    <ul className="space-y-2 text-sm text-green-800">
                      <li>✓ Employment contract or certificate of employment</li>
                      <li>✓ Payslips and proof of employment</li>
                      <li>✓ Termination notice or resignation letter</li>
                      <li>✓ Any written communications (emails, texts, memos)</li>
                      <li>✓ Proof of income and household expenses</li>
                      <li>✓ Valid ID and contact information</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </motion.div>
    );
  };

  if (showResult) {
    return renderResult();
  }

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-slate-600">
          <span>Question {currentStep + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-500 to-amber-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="border-2 border-amber-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
              <CardTitle className="text-xl md:text-2xl">
                {currentQuestion.question}
              </CardTitle>
              {currentQuestion.helpText && (
                <p className="text-amber-100 text-sm mt-2">{currentQuestion.helpText}</p>
              )}
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              {renderQuestion(currentQuestion)}
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      {currentStep > 0 && (
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            ← Previous Question
          </Button>
          <Button
            variant="ghost"
            onClick={resetChecker}
            className="text-slate-600"
          >
            Start Over
          </Button>
        </div>
      )}
    </div>
  );
}
