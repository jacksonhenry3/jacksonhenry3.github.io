#kniematics solver
#jackson Henry
import wx
from math import sqrt


#creates a class that inherits from wx.Frame
class MyFrame(wx.Frame):
    #the constructor
    def __init__(self,parent,id,title):
        #creates a wx Frame based on parameters given in argument
        wx.Frame.__init__(self,parent,id,title,wx.DefaultPosition,wx.Size(485,230))
        
        #creates a panel widget in  which to place children
        panel = wx.Panel(self,-1)


        wx.Button(panel, 0, 'solve', (1060-685,125))

        # another child, the input box
        box_width = 230
        initial_y_loc = 5
        Increment = 30
        

        #this creates the 5 input boxes and their titles
        wx.StaticText(panel, -1, "acceleration (m/s^2) =", (5, initial_y_loc+1))
        self.a  = wx.TextCtrl(panel, -1, '', (120,initial_y_loc), (box_width, -1))
        
        wx.StaticText(panel, -1, "Initial Velocity (m/s) =", (10, initial_y_loc+1+Increment))
        self.vi = wx.TextCtrl(panel, -1, '', (120,initial_y_loc+Increment), (box_width, -1))
        
        wx.StaticText(panel, -1, "final velocity (m/s) =", (15, initial_y_loc+1+2*Increment))
        self.vf = wx.TextCtrl(panel, -1, '', (120,initial_y_loc+2*Increment), (box_width, -1))

        wx.StaticText(panel, -1, "distance (m) = ", (45, initial_y_loc+1+3*Increment))
        self.d  = wx.TextCtrl(panel, -1, '', (120,initial_y_loc+3*Increment), (box_width, -1))
        
        wx.StaticText(panel, -1, "time (s) = ", (65, initial_y_loc+1+4*Increment))
        self.t  = wx.TextCtrl(panel, -1, '', (120,initial_y_loc+4*Increment), (box_width, -1))

        #box for displaying the answer
        self.answer = wx.TextCtrl(panel, -1, 'the answer', (120,initial_y_loc+5+5*Increment), (box_width*1.5, -1), style = wx.TE_READONLY)

        
        #binds solve to the solve function
        self.Bind(wx.EVT_BUTTON,self.solve,id = 0)

        # a line for dapper good looks ;)
        wx.StaticLine(panel,-1,(1040-685,5),(3,150))

        #the possible variable you could solve for and a pull down menu for the user to choose
        Vars = ['initial velocity','final velocity','acceleration','distance','time']
        wx.StaticText(panel, -1, "solve for:", (1050-685, 5))
        self.unknown = wx.ComboBox(panel, -1, "", (1050-685, 25), wx.DefaultSize,Vars, wx.CB_DROPDOWN)


    #the solving algorythm
    def solve(self,event):
        #clear the current answer
        self.answer.Clear()

        #gets the valus from the input boxes
        a = self.a.GetValue()
        vi = self.vi.GetValue()
        vf = self.vf.GetValue()
        t = self.t.GetValue()
        d = self.d.GetValue()

        #gets what the user wants to solve for
        unknown = self.unknown.GetStringSelection()

        #check which variables are given and applies apropriate kinematic equation.
        if unknown =='distance':
            if (vi and vf and t)!= u'':
                vi = float(vi)
                vf = float(vf)
                t = float(t)
                d = (vi+vf)/2.*t
            elif (a and vf and vi) != u'':
                vi = float(vi)
                vf = float(vf)
                a = float(a)
                d = ((vf**2.0)-(vi**2.0))/(2.0*a)
            elif (vi and t and a) !=u'':
                vi = float(vi)
                t = float(t)
                a = float(a)
                d = vi*t+(.5*(a)*(t**2))
            self.answer.AppendText('d = '+str(d)+' m')
        if unknown =='acceleration':
            if (vi and vf and d) != u'':
                vi = float(vi)
                vf = float(vf)
                d = float(d)
                a = (vf**2-vi**2)/(2*d)
            elif (vf and vi and t) != u'':
                vf = float(vf)
                vi = float(vi)
                t = float(t)
                a = (vf-vi)/t
            elif (t and d and vi) != u'':
                t = float(t)
                d = float(d)
                vi = float(vi)
                a = (2.*(d-t*vi))/t**2
            self.answer.AppendText('a = '+str(a)+' m/s^2')
        if unknown =='initial velocity':
            if (d and a and t) !=u'':
                d = float(d)
                a = float(a)
                t = float(t)
                vi = (2*d-a*t**2)/(2*t)
            elif (d and a and vf) !=u'':
                d = float(d)
                a = float(a)
                vf = float(vf)
                vi =[-sqrt(-2*a*d+vf**2),sqrt(-2*a*d+vf**2)]
            elif (a and t and vf) !=u'':
                a = float(a)
                t = float(t)
                vf = float(vf)
                vi = -a*t + vf
            elif (d and t and vf) !=u'':
                d = float(d)
                t = float(t)
                vf = float(vf)
                vi = (2.*d-t*vf)/t
            self.answer.AppendText('vi = '+str(vi)+' m/s')
        if unknown =='final velocity':
            if (d and a and vi) !=u'':
                d = float(d)
                a = float(a)
                vi = float(vi)
                vf ==[-sqrt(-2*a*d+vi**2),sqrt(-2*a*d+vi**2)]
            elif (a and t and vi) !=u'':
                a = float(a)
                t = float(t)
                vi = float(vi)
                vf = a*t + vi
            elif (d and t and vi) !=u'':
                d = float(d)
                t = float(t)
                vi = float(vi)
                vf = (2.*d-t*vi)/t
            self.answer.AppendText('vf = '+str(vf)+' m/s')
        if unknown == 'time':
            if (vi and a and d) != u'':
                vi = float(vi)
                a = float(a)
                d = float(d)
                t = [(-vi-sqrt(2*a*d+vi**2)/a), (-vi+sqrt(2*a*d+vi**2)/a)]
            elif (vi and a and vf) != u'':
                vi = float(vi)
                a = float(a)
                vf = float(vf)
                t = (vf - vi)/a
            elif (vi and d and vf) != u'':
                vi = float(vi)
                d = float(d)
                vf = float(vf)
                t = (2*d)/(vf+vi)
            self.answer.AppendText('t = '+str(t)+' s')
                
class MyApp(wx.App):
    def OnInit(self):
        frame = MyFrame(None, -1, 'Kinematic solver')
        frame.Show(True)
        self.SetTopWindow(frame)
        return True

app = MyApp(0)
app.MainLoop()