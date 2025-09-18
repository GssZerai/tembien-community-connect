import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileText, Download, Eye, Shield, DollarSign, Users } from "lucide-react";

export const Transparency = () => {
  const reports = [
    {
      title: "Annual Financial Report 2023",
      type: "Financial",
      date: "March 2024",
      size: "2.4 MB",
      description: "Comprehensive financial statements, budget allocation, and expenditure details."
    },
    {
      title: "Impact Assessment Report 2023", 
      type: "Impact",
      date: "February 2024",
      size: "3.1 MB",
      description: "Detailed analysis of program outcomes and community impact measurements."
    },
    {
      title: "Governance & Operations Report",
      type: "Governance",
      date: "January 2024", 
      size: "1.8 MB",
      description: "Board decisions, organizational structure changes, and operational updates."
    },
    {
      title: "Donor Acknowledgment Report 2023",
      type: "Funding",
      date: "December 2023",
      size: "1.2 MB", 
      description: "Recognition of donors and funding sources with allocation breakdown."
    }
  ];

  const financialData = [
    { category: "Education Programs", percentage: 35, amount: "$125,000" },
    { category: "Agricultural Development", percentage: 28, amount: "$98,000" },
    { category: "Infrastructure Projects", percentage: 22, amount: "$77,000" },
    { category: "Administrative Costs", percentage: 10, amount: "$35,000" },
    { category: "Emergency Relief", percentage: 5, amount: "$18,000" }
  ];

  return (
    <section id="transparency" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Shield className="w-3 h-3 mr-2" />
            Accountability
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Transparency & Accountability
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe in complete transparency with our members, donors, and the communities we serve. 
            Access our detailed reports and see exactly how we use resources to create impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Financial Transparency */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-primary" />
                Financial Allocation 2023
              </CardTitle>
              <CardDescription>
                How we invested $353,000 in community development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {financialData.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{item.category}</span>
                      <div className="text-right">
                        <div className="text-sm font-semibold">{item.percentage}%</div>
                        <div className="text-xs text-muted-foreground">{item.amount}</div>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary rounded-full h-2 transition-all duration-300"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-primary" />
                Impact Metrics 2023
              </CardTitle>
              <CardDescription>
                Measurable outcomes from our programs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">1,250</div>
                  <div className="text-sm text-muted-foreground">Students Supported</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">45</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">8,500</div>
                  <div className="text-sm text-muted-foreground">People Reached</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">Communities Served</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reports Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">Published Reports</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {reports.map((report, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{report.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <Badge variant="secondary">{report.type}</Badge>
                        <span>{report.date}</span>
                        <span>{report.size}</span>
                      </div>
                    </div>
                    <FileText className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{report.description}</p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Commitment Statement */}
        <div className="text-center">
          <div className="bg-card rounded-lg p-8 max-w-4xl mx-auto border">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Our Commitment to Transparency</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              TIDA is committed to maintaining the highest standards of transparency and accountability. 
              We publish regular reports on our finances, programs, and governance. Our board meetings 
              are open to members, and we welcome questions and feedback from our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default">
                <FileText className="w-4 h-4 mr-2" />
                Request Additional Information
              </Button>
              <Button variant="outline">
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};