import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState("12");
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("oneTime");
  const { toast } = useToast();

  const donationMutation = useMutation({
    mutationFn: async (donationData: { amount: string; type: string }) => {
      const response = await apiRequest("POST", "/api/donations", {
        amount: donationData.amount,
        currency: "USD",
        type: donationData.type
      });
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Thank You for Your Generosity!",
        description: "Your donation helps us spread God's Word worldwide. In production, this would redirect to Stripe Checkout.",
      });
      console.log('Donation created:', data);
    },
    onError: (error) => {
      toast({
        title: "Donation Error",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
      console.error('Donation error:', error);
    }
  });

  const handleDonate = () => {
    const amount = customAmount || selectedAmount;
    
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please select or enter a valid donation amount.",
        variant: "destructive",
      });
      return;
    }

    donationMutation.mutate({
      amount,
      type: donationType
    });
  };

  const presetAmounts = [
    { value: "3", label: "Coffee Cup", description: "Support daily operations" },
    { value: "7", label: "Weekly Blessing", description: "Fund API costs for 1 week" },
    { value: "12", label: "Monthly Support", description: "Enable 100+ voice generations", popular: true },
    { value: "50", label: "Major Impact", description: "Support entire language expansion" }
  ];

  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-primary/5 via-white to-orange-500/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl text-gray-900 mb-4">Partner with Us in Ministry</h2>
          <p className="text-xl text-gray-600 mb-8">
            Your generous support helps us reach more souls with God's Word through innovative technology. 
            Every contribution makes a difference in expanding His kingdom worldwide.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
            alt="Happy Christian families reading Bible together in peaceful home setting" 
            className="rounded-xl shadow-lg w-full max-w-2xl mx-auto mb-8"
          />
        </div>
        
        <Card className="shadow-xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="font-bold text-2xl text-gray-900 mb-4">Choose Your Kingdom Investment</h3>
              <p className="text-gray-600">All donations are tax-deductible and go directly to ministry operations</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {presetAmounts.map((amount) => (
                <button
                  key={amount.value}
                  onClick={() => {
                    setSelectedAmount(amount.value);
                    setCustomAmount("");
                  }}
                  className={`relative border-2 p-6 rounded-xl text-center transition-all hover:shadow-lg transform hover:scale-105 duration-300 group ${
                    selectedAmount === amount.value && !customAmount
                      ? "border-primary bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "border-gray-200 hover:border-primary bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
                  }`}
                >
                  {amount.popular && (
                    <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  <div className={`text-2xl font-bold ${
                    selectedAmount === amount.value && !customAmount ? "text-white" : "text-gray-900 group-hover:text-primary"
                  }`}>
                    ${amount.value}
                  </div>
                  <div className={`text-sm ${
                    selectedAmount === amount.value && !customAmount ? "text-white/90" : "text-gray-600"
                  }`}>
                    {amount.label}
                  </div>
                  <div className={`text-xs mt-2 ${
                    selectedAmount === amount.value && !customAmount ? "text-white/75" : "text-gray-500"
                  }`}>
                    {amount.description}
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mb-6">
              <Label className="block text-sm font-semibold text-gray-700 mb-2">Custom Amount</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount("");
                  }}
                  className="pl-8"
                />
              </div>
            </div>
            
            <div className="mb-8">
              <RadioGroup value={donationType} onValueChange={setDonationType} className="flex justify-center space-x-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="oneTime" id="oneTime" />
                  <Label htmlFor="oneTime">One-time gift</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monthly" id="monthly" />
                  <Label htmlFor="monthly">Monthly partnership</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="text-center">
              <Button 
                onClick={handleDonate}
                disabled={donationMutation.isPending}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {donationMutation.isPending ? (
                  <div className="flex items-center relative z-10">
                    <svg className="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Processing...</span>
                  </div>
                ) : (
                  <div className="flex items-center relative z-10">
                    <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <span>Donate with Stripe</span>
                  </div>
                )}
              </Button>
              <p className="text-sm text-gray-500 mt-3">
                <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Secure payment powered by Stripe • Tax-deductible receipt included
              </p>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Your Impact
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• $3 provides 100 voice generations for new believers</li>
                <li>• $12 supports monthly server costs for global accessibility</li>
                <li>• $50 funds complete language expansion to new regions</li>
                <li>• Custom amounts help us reach specific ministry goals</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
