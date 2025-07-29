import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { MobileLayout } from "../ui/mobile-layout";
import { MobileHeader } from "../ui/mobile-header";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { ChevronDown } from "lucide-react";
import { termsAgreements } from "../../data/mockData";
import { TermsAgreement } from "../../types/auth";

export function TermsAgreementForm() {
  const navigate = useNavigate();
  const [agreements, setAgreements] = useState<TermsAgreement[]>(termsAgreements);
  
  const allRequired = agreements.filter(term => term.required);
  const allRequiredAgreed = allRequired.every(term => term.agreed);
  const allAgreed = agreements.every(term => term.agreed);

  const handleIndividualChange = (id: string, checked: boolean) => {
    setAgreements(prev => 
      prev.map(term => 
        term.id === id ? { ...term, agreed: checked } : term
      )
    );
  };

  const handleAllAgree = (checked: boolean) => {
    setAgreements(prev => 
      prev.map(term => ({ ...term, agreed: checked }))
    );
  };

  const handleNext = () => {
    if (allRequiredAgreed) {
      navigate('/signup/form');
    }
  };

  return (
    <MobileLayout>
      <MobileHeader 
        title="회원가입" 
        onBack={() => navigate('/login')} 
      />
      
      <div className="p-4 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-foreground">
            서비스 이용을 위해
          </h2>
          <h2 className="text-xl font-bold text-foreground">
            이용약관 동의가 필요합니다.
          </h2>
        </div>

        <div className="space-y-4">
          {/* All agree checkbox */}
          <div className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg">
            <Checkbox
              id="all-agree"
              checked={allAgreed}
              onCheckedChange={handleAllAgree}
            />
            <label 
              htmlFor="all-agree" 
              className="font-medium text-foreground cursor-pointer"
            >
              약관에 전체 동의합니다.
            </label>
          </div>

          {/* Individual terms */}
          <div className="space-y-2">
            {agreements.map((term) => (
              <Collapsible key={term.id} className="border rounded-lg">
                <div className="flex items-center space-x-3 p-4">
                  <Checkbox
                    id={term.id}
                    checked={term.agreed}
                    onCheckedChange={(checked) => 
                      handleIndividualChange(term.id, checked as boolean)
                    }
                  />
                  <label 
                    htmlFor={term.id} 
                    className="flex-1 text-sm cursor-pointer"
                  >
                    {term.title}
                  </label>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="px-4 pb-4">
                  <div className="text-sm text-muted-foreground whitespace-pre-line border-t pt-3">
                    {term.content}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>

        <div className="pt-6">
          <Button 
            onClick={handleNext}
            disabled={!allRequiredAgreed}
            className="w-full h-12 text-base font-medium"
          >
            확인
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}