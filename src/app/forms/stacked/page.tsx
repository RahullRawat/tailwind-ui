'use client'

import Image from 'next/image'
import { ImageIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

export default function StackedForm() {
  return (
    <div className="m-auto my-4 flex min-h-screen max-w-7xl flex-col space-y-10 rounded-md border">
      <div className="mx-auto w-2/4 space-y-10 py-28">
        <div className="space-y-12 border-b pb-12">
          <div className="space-y-2">
            <div className="font-semibold">Profile</div>
            <div className="text-sm font-normal text-gray-600">
              This information will be displayed publicly so be careful what you share.
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Username</div>
            <Input placeholder="worklocation.com/ janesmith" className="w-[430px]" />
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">About</div>
            <Textarea />
            <div className="text-sm font-normal text-gray-600">Write a few sentences about yourself.</div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Photo</div>
            <div className="flex items-center space-x-3">
              <Image src="/avatar.jpg" alt="avatar" height={45} width={45} />
              <Button variant={'outline'} size={'sm'} className="font-semibold">
                Change
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Cover Photo</div>
            <div className="flex h-52 flex-col items-center justify-center space-y-4 rounded-md border border-dashed border-gray-300">
              <div>
                <ImageIcon className="text-gray-400" size={30} />
              </div>
              <div className="space-y-1 text-center">
                <div className="text-sm text-gray-600">
                  <span className="cursor-pointer font-semibold text-blue-800">Upload a file</span> or drag and drop
                </div>
                <div className="text-xs text-gray-600">PNG, JPG, GIF up to 10MB</div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-12 border-b pb-12">
          <div className="space-y-2">
            <div className="font-semibold">Personal Information</div>
            <div className="text-sm font-normal text-gray-600">Use a permanent address where you can receive mail.</div>
          </div>
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-sm font-medium">First name</div>
                <Input />
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium">Last name</div>
                <Input />
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">Email</div>
              <Input type="email" className="w-96" />
            </div>
            <div className="grid grid-cols-2">
              <div className="col-span-1 space-y-2">
                <div className="text-sm font-medium">Country</div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">Street Address</div>
              <Input />
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-sm font-medium">City</div>
                <Input />
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium">State / Province</div>
                <Input />
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium">Zip / Postal</div>
                <Input />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-12 border-b pb-12">
          <div className="space-y-2">
            <div className="font-semibold">Notifications</div>
            <div className="text-sm font-normal text-gray-600">
              We&apos;ll always let you know about important changes, but you pick what else you want to hear about.
            </div>
          </div>
          <div className="space-y-6">
            <div className="text-sm font-semibold">By Email</div>
            <div className="flex space-x-2">
              <Checkbox id="item1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="item1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Comments
                </label>
                <p className="text-sm text-muted-foreground">
                  Get notified when someones posts a comment on a posting.
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Checkbox id="item2" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="item2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Candidates
                </label>
                <p className="text-sm text-muted-foreground">Get notified when a candidate applies for a job.</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Checkbox id="item3" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="item3"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Offers
                </label>
                <p className="text-sm text-muted-foreground">
                  Get notified when a candidate accepts or rejects an offer.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-12">
            <div className="space-y-2">
              <div className="text-sm font-semibold">Push Notifications</div>
              <div className="text-sm font-normal text-gray-600">These are delivered via SMS to your mobile phone.</div>
            </div>
            <RadioGroup defaultValue="everything" className="space-y-4">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="everything" id="everything" />
                <Label htmlFor="everything">Everything</Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="email" id="email" />
                <Label htmlFor="email">Same as email</Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="notifications" id="notifications" />
                <Label htmlFor="notifications">No push notifications</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="text-right">
          <Button variant={'ghost'}>Cancel</Button>
          <Button className="bg-blue-600">Save</Button>
        </div>
      </div>
    </div>
  )
}
