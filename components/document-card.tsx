'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FileSignature, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DocumentCardProps {
  title: string;
  status: 'pending' | 'completed';
  date: string;
  signers: string[];
}

export function DocumentCard({ title, status, date, signers }: DocumentCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div className="flex items-center space-x-2">
          <FileSignature className="h-4 w-4" />
          <CardTitle className="text-sm font-medium line-clamp-1">
            {title}
          </CardTitle>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Download</DropdownMenuItem>
            <DropdownMenuItem>Share</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-4">
          <Badge variant={status === 'completed' ? 'default' : 'secondary'}>
            {status === 'completed' ? '✓ Signed' : '⏳ Pending'}
          </Badge>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <div className="flex -space-x-2">
          {signers.map((signer, i) => (
            <Avatar key={i} className="border-2 border-background">
              <AvatarFallback>
                {signer.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={status === 'pending' ? 'default' : 'secondary'}>
          {status === 'pending' ? 'Sign Now' : 'View Document'}
        </Button>
      </CardFooter>
    </Card>
  );
}