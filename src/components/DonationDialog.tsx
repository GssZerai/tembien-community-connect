import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Copy, Heart, Building, CreditCard, Globe, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DonationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DonationDialog = ({ open, onOpenChange }: DonationDialogProps) => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: `${label} has been copied to your clipboard.`,
    });
  };

  const bankDetails = [
    {
      bank: "Commercial Bank of Ethiopia",
      accountName: "Tembien International Development Association",
      accountNumber: "1000123456789",
      swiftCode: "CBETETAA",
      currency: "ETB"
    },
    {
      bank: "Bank of Abyssinia",
      accountName: "TIDA International Fund",
      accountNumber: "2000987654321", 
      swiftCode: "ABYSETAA",
      currency: "USD"
    }
  ];

  const paymentMethods = [
    {
      method: "Bank Transfer",
      description: "Direct bank transfer to our accounts",
      icon: Building,
      recommended: true
    },
    {
      method: "Mobile Money",
      description: "CBE Birr, M-Birr, HelloCash",
      icon: CreditCard,
      recommended: false
    },
    {
      method: "International Transfer",
      description: "Western Union, MoneyGram, Wise",
      icon: Globe,
      recommended: false
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl">
            <Heart className="w-6 h-6 mr-2 text-primary" />
            Support TIDA's Mission
          </DialogTitle>
          <DialogDescription>
            Your donation helps us empower communities in Tembien through education, 
            development programs, and sustainable initiatives.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Impact Statement */}
          <Card className="p-6 gradient-primary text-white">
            <h3 className="text-xl font-semibold mb-3">Your Impact</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold">$50</div>
                <div className="text-white/90">Sponsors 1 student for a month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">$200</div>
                <div className="text-white/90">Funds a small infrastructure project</div>
              </div>
            </div>
          </Card>

          {/* Payment Methods */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
            <div className="grid gap-3">
              {paymentMethods.map((method, index) => (
                <Card key={index} className={`p-4 ${method.recommended ? 'border-primary' : ''}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <method.icon className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium">{method.method}</div>
                        <div className="text-sm text-muted-foreground">{method.description}</div>
                      </div>
                    </div>
                    {method.recommended && (
                      <Badge variant="default">Recommended</Badge>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Separator />

          {/* Bank Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bank Account Details</h3>
            <div className="space-y-4">
              {bankDetails.map((bank, index) => (
                <Card key={index} className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-medium">{bank.bank}</h4>
                    <Badge variant="outline">{bank.currency}</Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Account Name:</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-mono">{bank.accountName}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(bank.accountName, "Account name")}
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Account Number:</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-mono">{bank.accountNumber}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(bank.accountNumber, "Account number")}
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">SWIFT Code:</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-mono">{bank.swiftCode}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(bank.swiftCode, "SWIFT code")}
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Important Notes */}
          <Card className="p-4 bg-muted/50">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm space-y-2">
                <p className="font-medium">Important Notes:</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Please include your name and contact information with your donation</li>
                  <li>• For tax receipts, email us at donations@tida.org with your transaction details</li>
                  <li>• International transfers may incur additional fees</li>
                  <li>• All donations go directly to community development programs</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Contact Info */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Need help with your donation? Contact our team:
            </p>
            <div className="flex justify-center space-x-4 text-sm">
              <span>📧 donations@tida.org</span>
              <span>📞 +251 xxx xxx xxx</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};