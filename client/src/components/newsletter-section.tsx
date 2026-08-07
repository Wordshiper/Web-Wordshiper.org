import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle, Loader2 } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertNewsletterSchema } from "@shared/schema";
import { z } from "zod";
import { useLanguage } from "@/hooks/use-language";

const newsletterFormSchema = insertNewsletterSchema.extend({
  email: z.string().email("Valid email address required"),
});

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();
  const queryClient = useQueryClient();

  const subscribeMutation = useMutation({
    mutationFn: async (data: z.infer<typeof newsletterFormSchema>) => {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return response.json();
    },
    onSuccess: () => {
      setIsSubscribed(true);
      setEmail("");
      toast({
        title: "구독 완료!",
        description: "15분 혁명 소식을 이메일로 받아보실 수 있습니다.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/newsletter"] });
    },
    onError: (error) => {
      toast({
        title: "구독 실패",
        description: "다시 시도해주세요.",
        variant: "destructive",
      });
      console.error("Newsletter subscription error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = newsletterFormSchema.parse({ email });
      subscribeMutation.mutate(validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "잘못된 이메일",
          description: "올바른 이메일 주소를 입력해주세요.",
          variant: "destructive",
        });
      }
    }
  };

  if (isSubscribed) {
    return (
      <Card className="bg-white/20 border-white/30">
        <CardContent className="p-6 text-center">
          <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">구독 완료!</h3>
          <p className="text-blue-100">
            15분 성경암송 혁명 소식을 이메일로 받아보실 수 있습니다.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:bg-white/30"
                required
                disabled={subscribeMutation.isPending}
              />
            </div>
            <Button
              type="submit"
              disabled={subscribeMutation.isPending || !email}
              className="bg-white text-purple-600 hover:bg-gray-100 font-medium px-6"
            >
              {subscribeMutation.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  구독 중...
                </>
              ) : (
                "구독하기"
              )}
            </Button>
          </div>
          <p className="text-xs text-blue-100 text-center">
            언제든지 구독을 취소할 수 있습니다. 개인정보는 안전하게 보호됩니다.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}